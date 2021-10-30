export const validateUsername = (username:string) => {
    const regexp = /^[a-zA-Z0-9_]{5,}$/;
    return regexp.test(username);
}

export const validatePassword = (password:string) => {
    // Citation: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    const regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regexp.test(password);
}

export const validateNotNull = (field:string) => {
    return field != "";
}