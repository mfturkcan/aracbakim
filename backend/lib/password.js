const crypto = require("crypto-js");

// const algorithm = "aes-256-cbc";

// const initVector = new Buffer('09d9363a39f82314f0d9ee8244934b1e').toString('hex').slice(0, 16);
const Securitykey = new Buffer('e841f7638a859bfd58c79119f3fe2c3d54c14061ebce517bdb4d580f6c50e855').toString('hex').slice(0, 32);


// const encryptPassword = async (password) => {

//     const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

//     let encryptedData = cipher.update(password, "utf-8", "hex");

//     encryptedData += cipher.final("hex");

//     return encryptedData;
// }

// const decryptPassword = (encryptedData) => {
//     const decipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

//     let decryptedData = decipher.update(encryptedData, "hex", "utf-8");

//     decryptedData += decipher.final("utf8");

//     return decryptedData;
// }


const encryptPassword = (password) => {
    return crypto.AES.encrypt(password, Securitykey).toString();
}

const decryptPassword = async (encryptedData) => {
    const decipher = await crypto.AES.decrypt(encryptedData, Securitykey);

    let decryptedData = decipher.toString(crypto.enc.Utf8);

    return decryptedData;
}


module.exports.encryptPassword = encryptPassword;
module.exports.decryptPassword = decryptPassword;