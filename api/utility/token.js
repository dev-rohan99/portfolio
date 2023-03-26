import jwt from "jsonwebtoken";


export const createToken = (payload, expires) => {

    const token = jwt.sign(payload, process.env.JWT_SECRECT, {
        expiresIn : expires
    });
    return token;

}

