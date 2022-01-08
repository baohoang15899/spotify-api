const logOut = (setUser: () => void) => {
    const token = localStorage.getItem('token_data')
    if (token !== null) {
        // localStorage.removeItem('token_data')
        setUser()
    }
}

export default logOut