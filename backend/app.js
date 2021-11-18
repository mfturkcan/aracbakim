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
const user_routes = require("./routes/user/user")

const list_routes = [
    require("./routes/problem/problemler"),
    require("./routes/problem/aktiviteler"),
    require("./routes/problem/alanlar"),
    require("./routes/cikti/cikti"),
    require("./routes/cikti/ciktidetay"),
    require("./routes/mudahale/mudahale"),
    require("./routes/mudahale/mudahaledetay"),
    require("./routes/problem/problembirim"),
    require("./routes/problem/siniflar"),
    require("./routes/problem/belirtecler"),
    require("./routes/mudahale/problemmudahale"),
    require("./routes/cikti/problemcikti"),
    require("./routes/mudahale/ilavemudahaledetay"),
    require("./routes/cikti/ilaveciktidetay"),
]



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

app.get("/isAuth", (req, res) => {
    if (req.session.user) {
        res.json(req.session.user);
    } else {
        res.json({
            username: '',
            role: '',
        });
    }
})

app.use(user_routes);

app.use(kullanicilar_routes);
app.use(iller_routes);
app.use(ilceler_routes);
app.use(birimler_routes);
app.use(personel_routes);

list_routes.forEach(route => app.use(route));

app.listen(5000, function () {
    console.log("Server has started at port 5000");
});
// connection.end();