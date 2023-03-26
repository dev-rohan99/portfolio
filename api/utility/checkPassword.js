import bcrypt from "bcryptjs";


export const checkPassword = (enterPassword, registeredPassword) => {

    const checkPass = bcrypt.compareSync(enterPassword, registeredPassword);
    return checkPass;

}

