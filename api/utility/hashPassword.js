import bcrypt from "bcryptjs";

export const hashPasswordGenarate = (password) => {

    const genPassSalt = bcrypt.genSaltSync(10);
    const genHashPass = bcrypt.hashSync(password, genPassSalt);
    return genHashPass;

}

