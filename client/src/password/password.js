const crypto = require("crypto-js");
const Securitykey = new Buffer('e841f7638a859bfd58c79119f3fe2c3d54c14061ebce517bdb4d580f6c50e855').toString('hex').slice(0, 32);


const encryptPassword = (password) => {
    return crypto.AES.encrypt(password, Securitykey).toString();
}

const decryptPassword = (encryptedData) => {
    const decipher = crypto.AES.decrypt(encryptedData, Securitykey);

    let decryptedData = decipher.toString(crypto.enc.Utf8);
    return decryptedData;
}

module.exports.encryptPassword = encryptPassword;
module.exports.decryptPassword = decryptPassword;