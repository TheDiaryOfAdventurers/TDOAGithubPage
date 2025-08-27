import request from "../utils/request.jsx"

export async function register(userData) {
    const response =  await request.post('/api/users/register', userData);
    alert(JSON.stringify(response.data))
}

export async function login(loginData) {
    const response =  await request.post('/api/users/login', loginData);
    alert(JSON.stringify(response.data))
}