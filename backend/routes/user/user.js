const router = require("express").Router();
const decryptPassword = require("../../lib/password").decryptPassword;
const encryptPassword = require("../../lib/password").encryptPassword;
const connection = require("../../config/database");

router.post("/register", async (req, res) => {
    const { username, password } = req.body;

    let response = {
        result: true,
    }

    if (username && password) {
        const encryptedPassword = await encryptPassword(password);
        connection.query(`INSERT INTO Kullanicilar (KullaniciAdi , Şifre) VALUES ("${username}", "${encryptedPassword}")`,
            function (err, result) {
                if (err) {
                    console.log(err);
                    response = { result: false, message: "Kayıt olurken bir hata oluştu. Hata mesajı : " + err.message }
                    res.json(response);
                }
                else {
                    req.session.user = {
                        username: username,
                        role: 'Yönetici'
                    }
                    req.session.save();

                    response = {
                        result: true,
                        user: req.session.user,
                    }
                    res.json(response);
                }
            });
    }
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    let response = {
        result: true
    }
    if (username, password) {
        connection.query(`SELECT * FROM Kullanicilar WHERE KullaniciAdi = "${username}"`, async function (err, result) {
            if (err) {
                console.log(err);
                response = { result: false, message: "Giriş yaparken bir hata oluştu. Hata mesajı : " + err.message }
                res.json(response);
            } else {
                if (result.length > 0) {
                    const user = result[0];
                    // is_password_valid Şifreyi oluştururken uyguladığımız methodu şuan girilen şifreye uygulayıp, sonucu kontrol eder.
                    const is_password_valid = await decryptPassword(user["Şifre"]) == password;

                    if (is_password_valid) {

                        connection.query(`SELECT BirimMudurKullaniciAdi FROM Birimler WHERE BirimMudurKullaniciAdi = "${username}"`, function (err, result_role) {
                            if (err) {
                                response = {
                                    result: false,
                                    message: "Giriş yaparken hata meydana geldi!",
                                }
                                console.log(err);
                                res.json(response);
                            } else {
                                console.log(result_role);
                                if (result_role.length > 0) {
                                    req.session.user = {
                                        username: username,
                                        role: "Müdür"
                                    };
                                    req.session.save();
                                    response = {
                                        result: true,
                                        user: {
                                            username: username,
                                            role: "Müdür"
                                        },
                                    }
                                    res.json(response);
                                } else {
                                    req.session.user = {
                                        username: username,
                                        role: "Yönetici"
                                    };
                                    req.session.save();
                                    response = {
                                        result: true,
                                        user: {
                                            username: username,
                                            role: "Yönetici"
                                        },
                                    }
                                    res.json(response);
                                }
                            }
                        })

                    } else {
                        response = {
                            result: false,
                            message: "Şifreyi yanlış girdiniz!",
                        }
                        res.json(response);
                    }
                }
                else {
                    // Return result false, not user found
                    response = {
                        result: false,
                        message: "Kullanıcı adına sahip bir kullanıcı bulunamadı!",
                    }
                    res.json(response);
                }
            }
        });
    }
});

router.get("/logout", (req, res) => {
    req.session.destroy();
    res.clearCookie('auth-token');

    res.json({
        result: true
    });
});

module.exports = router;