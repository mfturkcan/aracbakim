const crypto = require("crypto");

const generatePassword = async (password) => {
    const salt = crypto.randomBytes(12).toString("hex");
    const hash_password = crypto.pbkdf2Sync(password, salt, 10, 12, 'sha256').toString("hex");

    return {
        salt: salt,
        hash: hash_password
    }
}

const isValid = (hash, salt, password) => {
    return hash == crypto.pbkdf2Sync(password, salt, 10, 12, 'sha256').toString("hex");
}

module.exports.generatePassword = generatePassword;
module.exports.isValid = isValid;