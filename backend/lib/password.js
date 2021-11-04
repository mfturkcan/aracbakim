const crypto = require("crypto");

const algorithm = "aes-256-cbc";

const initVector = new Buffer('09d9363a39f82314f0d9ee8244934b1e').toString('hex').slice(0, 16);
const Securitykey = new Buffer('e841f7638a859bfd58c79119f3fe2c3d54c14061ebce517bdb4d580f6c50e855').toString('hex').slice(0, 32);


const encryptPassword = async (password) => {

    const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

    let encryptedData = cipher.update(password, "utf-8", "hex");

    encryptedData += cipher.final("hex");

    return encryptedData;


    // const salt = crypto.randomBytes(12).toString("hex");
    // const hash_password = crypto.pbkdf2Sync(password, salt, 10, 12, 'sha256').toString("hex");

    // return {
    //     salt: salt,
    //     hash: hash_password
    // }
}

const isValid = (encryptedData) => {
    const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);

    let decryptedData = decipher.update(encryptedData, "hex", "utf-8");

    decryptedData += decipher.final("utf8");

    return decryptedData;
}

module.exports.encryptPassword = encryptPassword;
module.exports.isValid = isValid;