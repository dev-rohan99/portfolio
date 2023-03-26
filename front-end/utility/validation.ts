

export const isEmail = (email : string) => {

    const pattern = /^[a-z0-9-_\.]{1,}@[a-z0-9]{1,}\.[a-z\.]{2,}$/;
    const checkMail = pattern.test(email);
    return checkMail

}

export const isUsername = (username : string) => {

    const pattern = /^[a-z0-9-_]{3,}$/;
    const checkUsername = pattern.test(username);
    return checkUsername

}

export const isPassword = (password : string) => {

    const pattern = /^[a-zA-Z0-9-_?><~`!@#$%^&*()=+/\\\]\{\};:'" ]{6,}$/;
    const checkPassword = pattern.test(password);
    return checkPassword

}

