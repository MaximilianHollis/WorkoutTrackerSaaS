 export default {
    login: user => {
        console.log(user);
        return fetch('http://localhost:5000/api/login', {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status !== 401)
                return res.json().then(data => data);
            else
                return { isAuthenticated: false, user: { username: "", plan: "", token: '' } };
        })
    },
    register: user => {
        console.log(user);
        return fetch('http://localhost:5000/api/register', {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => data);
    },
    logout: () => {
        return fetch('http://localhost:5000/api/logout')
            .then(res => res.json())
            .then(data => data);
    },
    authenticate: (user) => {
        return fetch('http://localhost:5000/api/authenticated', {
            headers: {
                'Authorization': 'Bearer ' + user.token
            }
        })
            .then(res => {
                if (res.status !== 401)
                    return res.json().then(data => data);
                else
                    return { isAuthenticated: false, user: { username: '', plan: '', token: '' } };
            });
    }

}