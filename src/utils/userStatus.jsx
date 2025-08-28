export const isUserLoggedIn = () => {
    const token = sessionStorage.getItem('userToken')
    return token !== null;
}