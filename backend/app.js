const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./config/database");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const encryptPassword = require("./lib/password").encryptPassword;
const kullanicilar_routes = require("./routes/kullanicilar");
const iller_routes = require("./routes/iller");
const ilceler_routes = require("./routes/ilceler");
const birimler_routes = require("./routes/birimler");
const personel_routes = require("./routes/personel");
const decryptPassword = require("./lib/password").decryptPassword;


var options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'db'
};

var sessionStore = new MySQLStore(options);

app.use(session({
    key: 'auth-token',
    secret: 'fcbd444d37b2582ac141f678dd16ecbe966d7287fffb9dbde627924d788041ba5cf7e9a23b8b53cbdf4dfc6845fb372a52ee22f507a02a5579b42f79cadc4606',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
}));

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const isAuth = (req, res, next) => {
    if (req.session.user) {
        console.log(req.session.user);
        next();
    }
}

app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    let response = {
        result: true,
    }

    if (username && password) {
        const encryptedPassword = await encryptPassword(password);
        encryptPassword
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

app.post("/login", (req, res) => {
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
                    const is_password_valid = await encryptPassword(password) == user["Şifre"];

                    if (is_password_valid) {
                        req.session.user = user;
                        req.session.save();
                        response = {
                            result: true,
                            user: user,
                        }
                        res.json(response);
                    } else {
                        response = {
                            result: false,
                            message: "Şifreyi yanlış girdiniz!",
                        }
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

app.get("/logout", (req, res) => {
    req.session.destroy();
    req.session.save();

    res.json({
        result: true
    });
});

app.get("/decrypt", async (req, res) => {
    //714d4eabdb2c07d019efb037f9d2b037
    // U2FsdGVkX19HINQFycuL6+6AwgwPLQt/OgnaMn6itWU=

    // U2FsdGVkX1+vGRcKFnEBdtSMI67e4dZMJVldTRmM/ss=
    const encrypted = 'U2FsdGVkX19HINQFycuL6+6AwgwPLQt/OgnaMn6itWU=';

    const password = await decryptPassword(encrypted);

    res.send(password);
})

app.use(kullanicilar_routes);
app.use(iller_routes);
app.use(ilceler_routes);
app.use(birimler_routes);
app.use(personel_routes);


app.listen(5000, function () {
    console.log("Server has started at port 5000");
});
// connection.end();