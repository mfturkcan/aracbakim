const crypto = require("crypto-js");

const algorithm = "aes-256-cbc";

const initVector = new Buffer('09d9363a39f82314f0d9ee8244934b1e').toString('hex').slice(0, 16);
const Securitykey = new Buffer('e841f7638a859bfd58c79119f3fe2c3d54c14061ebce517bdb4d580f6c50e855').toString('hex').slice(0, 32);


const encryptPassword = (password) => {
    return crypto.AES.encrypt(password, Securitykey).toString();
}

const decryptPassword = (encryptedData) => {
    console.log("sa");
    const decipher = crypto.AES.decrypt(encryptedData, Securitykey);

    let decryptedData = decipher.toString(crypto.enc.Utf8);

    console.log(decryptedData);
    return decryptedData;
}


// const decryptPassword = (encryptedData) => {
//     const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);

//     let decryptedData = decipher.update(encryptedData, "hex", "utf-8");

//     decryptedData += decipher.final("utf8");

//     return decryptedData;
// }

// module.exports.encryptPassword = encryptPassword;
module.exports.decryptPassword = decryptPassword;