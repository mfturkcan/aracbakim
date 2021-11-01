const express = require("express");
const app = express();
const cors = require("cors");
require("./config/database");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);

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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const isAuth = (req, res, next) => {
    if (req.session.user) {
        console.log(req.session.user);
        next();
    }
}

app.get("/login", (req, res) => {
    // const { email, password } = req.body;
    req.session.user = "salih";
    req.session.save();

    res.send("Added");
});

app.get("/sa", isAuth, (req, res) => {
    res.send("Success");
});

app.listen(3000, function () {
    console.log("Server has started at port 3000");
});