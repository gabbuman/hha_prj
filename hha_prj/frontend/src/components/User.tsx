export const storeUser = (data:JSON) => {
    localStorage.setItem('user', JSON.stringify(data));
}

export const getUser = () => {
    /* Return null if not stored */
    return JSON.parse(localStorage.getItem('user'));
}

export const checkUserExists = () => {
    if (JSON.parse(localStorage.getItem('user')) != null) return true;
    return false;
}

export const deleteUser = () => {
    localStorage.removeItem('user');
}