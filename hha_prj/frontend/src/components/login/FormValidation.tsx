export const validateUsername = (username:string) => {
    const regexp = /^[a-zA-Z0-9_]{5,}$/;
    return regexp.test(username);
}

export const validatePassword = (password:string) => {
    // Citation: https://www.thepolyglotdeveloper.com/2020/02/test-password-strength-regex-react-application/
    const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z]{8,}$/;
    console.log(regexp.test(password));
    return regexp.test(password);
}

export const validateNotNull = (field:string) => {
    return field != "";
}