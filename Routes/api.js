const express = require('express');
const apiRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../Config/passport');
const JWT = require('jsonwebtoken');
const User = require('../Models/Users');
const Workout = require('../Models/Workouts');
const Stripe = require('stripe');
const stripe = Stripe(process.env.stripe);
const bodyParser = require('body-parser');


// Use JSON parser for all non-webhook routes
/* apiRouter.use((req, res, next) => {
	if (req.originalUrl === '/webhook') {
	  next();
	} else {
	  bodyParser.json()(req, res, next);
	}
  }); */

  apiRouter.use(bodyParser.json({
	  verify: (req, res, buf) => {
		  req.rawBody = buf
	  }
  }));

  apiRouter.use(bodyParser.urlencoded({extended: false}))


var cors = require('cors');
apiRouter.use(cors({ origin: 'http://localhost:3000' }));
/* apiRouter.use(bodyParser.json({
	verify: (req, res, buf) => {
		req.rawBody = buf
	}
}));
 */
const signToken = userID => {
	return JWT.sign({
		iss: 'WorkoutSaaS',
		sub: userID
	}, process.env.JwtSecret, { expiresIn: '24h' });
};

//Registeration
apiRouter.post('/register', (req, res) => {
	const { username, password, email, plan } = req.body;
	let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
	if (!password.match(passw)) {
		res.status(400).json({ message: 'Password must contain one lowercase letter, one uppercase letter, one numeric digit, and one special character' });
	} else {
		User.findOne({ username }, (err, user) => {
			if (err) {
				res.status(500).json({ message: 'an unexpected error has occured' });
			}
			if (user) {
				res.status(400).json({ message: 'username taken' });
			}
			else {
				const newUser = new User({ username, password, email, plan });
				newUser.save(err => {
					if (err)
						res.status(500).json({ message: 'an unexpected error has occured. Could not be registered.' });
					else
						res.status(201).json({ message: 'account successfully created', success: true });
				});
			}
		});
	}

});

//Login
apiRouter.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
	if (req.isAuthenticated()) {
		const { _id, username, plan } = req.user;
		const token = signToken(_id);
		res.status(200).json({ isAuthenticated: true, user: { username, plan }, success: true, token: token });
	}
});

//Confirmation of Authentication

apiRouter.get('/authenticated', passport.authenticate('jwt', { session: false }), (req, res) => {
	res.status(200).json({ isAuthenticated: true, user: { username: 'thank god its workong' } });
});

//Logout
apiRouter.get('/logout', passport.authenticate('jwt', { session: false }), (req, res) => {
	res.json({ user: { username: '', plan: '', token: '' }, success: true });
});

//CRUD OPERATIONS

//Create a workout
apiRouter.post('/workout', passport.authenticate('jwt', { session: false }), (req, res) => {
	const newWorkout = new Workout(req.body);
	newWorkout.save(err => {
		if (err) {
			res.status(500).json({ message: 'an unexpected error occured' });
		} else {
			req.user.workouts.push(newWorkout);
			req.user.save(err => {
				if (err) {
					res.status(500).json({ message: 'user not found', success: false });
				} else {
					res.status(200).json({ message: 'successfully created a new workout', success: true });
				}
			});
		}
	});
});


//Read all workouts
apiRouter.get('/workout', passport.authenticate('jwt', { session: false }), (req, res) => {
	User.findById({ _id: req.user._id }).populate('workouts').exec((err, document) => {
		if (err) {
			res.status(500).json({ message: 'an unexpected error has occured', success: false });
		} else {
			res.status(200).json({ workouts: document.workouts, authenticated: true, success: true });
		}
	});
});


//Update a workout
apiRouter.patch('/workout', passport.authenticate('jwt', { session: false }), (req, res) => {
	const idToModify = req.body.id;
	const workout = req.body.workout;
	const newWorkout = { type: workout.type, duration: workout.duration, time: workout.time };
	User.findById({ _id: req.user._id }).populate('workouts').exec((err, document) => {
		if (err) {
			res.status(500).json({ message: 'an unexpected error has occured', success: false });
		} else {
			if (document.workouts.filter(w => w._id == idToModify)) {
				Workout.findByIdAndUpdate(idToModify, newWorkout, { new: false }).exec(err => {
					if (err)
						res.status(500).json({ message: err, success: false });
					else
						res.status(200).json({ message: 'changes saved sucessfully', success: true });
				});
			} else {
				res.status(400).json({ message: 'changes are unauthorized', success: false });
			}
		}
	});
});

//Delete a workout
apiRouter.delete('/workout', passport.authenticate('jwt', { session: false }), (req, res) => {
	const idToDelete = req.body.id;
	User.findById({ _id: req.user._id }).populate('workouts').exec((err, document) => {
		if (err)
			res.status(500).json({ message: 'an unexpected error has occured', success: false });
		else {
			if (document.workouts.filter(w => w._id == idToDelete)) {
				Workout.findByIdAndRemove(idToDelete).exec(err => {
					if (err)
						res.status(500).json({ message: 'Could not be deleted', success: false });
					else
						res.status(200).json({ message: 'changes saved sucessfully', success: true });
				});
			} else {
				res.status(400).json({ message: 'changes are unauthorized', success: false });
			}
		}
	});
});


//PAYMENT

//Single payment

apiRouter.post('/create-payment-intent', passport.authenticate('jwt', { session: false }), async (req, res) => {
	//Create payment intent
	const paymentIntent = await stripe.paymentIntents.create({
		amount: 1000,
		currency: 'usd'
	});

	res.send({
		clientSecret: paymentIntent.client_secret
	});
});


//Subscription
apiRouter.post('/sub', async (req, res) => {
	const { email, payment_method } = req.body;

	const customer = await stripe.customers.create({
		payment_method: payment_method,
		email: email,
		invoice_settings: {
			default_payment_method: payment_method,
		},
	});

	const subscription = await stripe.subscriptions.create({
		customer: customer.id,
		items: [{ plan: 'price_1IDCIqByoYw9YHw8ziDMuqkY' }],
		expand: ['latest_invoice.payment_intent']
	});

	const status = subscription['latest_invoice']['payment_intent']['status'];
	const client_secret = subscription['latest_invoice']['payment_intent']['client_secret'];

	res.json({ 'client_secret': client_secret, 'status': status });
});


//CHANGE DURING PROD
const webhookSecret = 'whsec_U64pWdlUkYOl15ZbNKiUkr2cWPvUmoV1';


//STRIPE WEBHOOK
// Match the raw body to content type application/json
apiRouter.post('/webhook', (req, res) => {
	const sig = req.headers['stripe-signature'];
	let event;

	try {
		//event = stripe.webhooks.constructEvent(req.rawBody, sig, webhookSecret);
		event = req.body
	}
	catch (err) {
		console.log(err)
	  	return res.status(400).send(`Webhook Error: ${err.message}`);
	}

  
	// Handle the event
	switch (event.type) {
	  case 'payment_intent.succeeded':
		const paymentIntent = event.data.object;
		console.log(paymentIntent);
		console.log('PaymentIntent was successful!');
		break;
	  case 'payment_method.attached':
		const paymentMethod = event.data.object;
		console.log('PaymentMethod was attached to a Customer!');
		break;
	  // ... handle other event types
	  default:
		console.log(`Unhandled event type ${event.type}`);
	}
  
	// Return a response to acknowledge receipt of the event
	res.json({received: true});
  });
  




module.exports = apiRouter;