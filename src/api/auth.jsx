import request from "../utils/request.jsx"

export const login = async (username, password) => {
    try {
        const response = await request.post('/api/users/login', {username, password})

        alert(response?.message)

        if (response?.code !== 200) return

        if (response?.data?.token) {
            const token = response.data.token
            sessionStorage.setItem('userToken', token);
            sessionStorage.setItem('username', username);
            console.log('[debug] Token 储存成功')
        } else {
            alert('登录失败，请联系开发者(海森堡)! ')
        }
    } catch (error) {
        alert('登录失败，请联系开发者(海森堡)! ' + error)
    }
}

export const register = async (username, password) => {
    try {
        const response = await request.post('/api/users/register', {username, password})

        alert(response?.message)

        if (response?.code !== 200) return

        if (response?.data?.token) {
            const token = response.data.token
            sessionStorage.setItem('userToken', token);
            sessionStorage.setItem('username', username);
            console.log('[debug] Token 储存成功')
        } else {
            alert('注册失败，请联系开发者(海森堡)! ')
        }
    } catch (error) {
        alert('注册失败，请联系开发者(海森堡)! ' + error)
    }
}

export const logout = () => {
    sessionStorage.removeItem('userToken')
    sessionStorage.removeItem('username')
}