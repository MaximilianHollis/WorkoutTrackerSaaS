export default {
    getWorkouts: token => {
        return fetch('http://localhost:3000/api/workout')
            .then(response => {
                if(response.status !== 401){
                    return response.json().then(data => data);
                } else {
                    return { message: "Unauthorized", success: false}
                }
            })
    },
    postWorkouts: (workout, user) => {
        return fetch('http://localhost:5000/api/workout', {
            method: 'post',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user.token

            }
        }).then(response => {
            if(response.status !== 401){
                return response.json().then(data => data);
            } else {
                return { message: 'Unauthorized'}
            }
        })
    }
}