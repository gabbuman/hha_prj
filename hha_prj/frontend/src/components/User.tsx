export const storeUser = (data:JSON) => {
    localStorage.setItem('user', JSON.stringify(data));
}