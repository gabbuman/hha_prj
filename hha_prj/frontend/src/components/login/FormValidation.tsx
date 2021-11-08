export const validateUsername = (username:string) => {
    const regexp = /^[a-zA-Z0-9_]{5,}$/;
    return regexp.test(username);
}

export const validatePassword = (password:string) => {
    // Citation: https://www.thepolyglotdeveloper.com/2020/02/test-password-strength-regex-react-application/
    const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z]{8,}$/;
    return regexp.test(password);
}

export const validateNotNull = (field:string) => {
    return field != "";
}

export const validateDepartment = (department:string) => {
    const regexp = /^[a-zA-Z]{3,}$/;
    return regexp.test(department);
}