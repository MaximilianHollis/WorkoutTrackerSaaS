import { response } from "express"

export default {
    getWorkouts: () => {
        return fetch('http://localhost:5000/api/workout')
            .then(response => {
                if(response.status !== 401){
                    return response.json().then(data => data);
                } else {
                    return { message: "Unauthorized", success: false}
                }
            })
    },
    postWorkouts: () => {
        return fetch('http://localhost:5000/api/login', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
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