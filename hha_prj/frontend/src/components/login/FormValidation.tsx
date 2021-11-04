export const validateUsername = (username:string) => {
    const regexp = /^[a-zA-Z0-9_]{5,}$/;
    return regexp.test(username);
}

export const validatePassword = (password:string) => {
    // Citation: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z]{8,}$/;
    console.log(regexp.test(password));
    return regexp.test(password);
}

export const validateNotNull = (field:string) => {
    return field != "";
}