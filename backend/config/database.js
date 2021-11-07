const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "db",
    multipleStatements: true,
});



connection.connect(function (err) {
    if (err) {
        connection = mysql.createConnection({
            host: "localhost",
            port: 3306,
            user: "root",
            password: "root",
            multipleStatements: true,
        });

        connection.query("CREATE DATABASE IF NOT EXISTS db", function (err, result) {
            if (err) throw err;
            console.log(result);
        });

        connection.config.database = "db";
    }
    console.log("Connected successful");
});


connection.query("CREATE TABLE IF NOT EXISTS Iller(IlKodu int PRIMARY KEY NOT NULL," +
    " IlAdi VARCHAR(100) NOT NULL)", function (err, result) {
        if (err) throw err;
        console.log(result);
    });

connection.query("CREATE TABLE IF NOT EXISTS Ilceler(IlceKodu int PRIMARY KEY NOT NULL," +
    " IlceAdi VARCHAR(100) NOT NULL, IlKodu int NOT NULL, FOREIGN KEY (IlKodu) REFERENCES Iller(IlKodu))",
    function (err, result) {
        if (err) throw err;
        console.log(result);
    });

const personel_query = "CREATE TABLE IF NOT EXISTS Personel(KullaniciAdi VARCHAR(150) PRIMARY KEY NOT NULL, Email VARCHAR(255) NOT NULL" +
    ", Ad VARCHAR(255) NOT NULL, Soyad VARCHAR(255) NOT NULL, SicilNo VARCHAR(50) NOT NULL," +
    " Cep VARCHAR(15) NOT NULL, EvAdresi VARCHAR(255) NOT NULL, IlKodu int NOT NULL," +
    " IlceKodu int NOT NULL, PostaKodu smallint NOT NULL, UstKullaniciAdi VARCHAR(150)," +
    " CalistigiBirimKodu int NOT NULL, FOREIGN KEY(IlKodu) REFERENCES Iller(IlKodu), " +
    "FOREIGN KEY(IlceKodu) REFERENCES Ilceler(IlceKodu), UNIQUE(Email), UNIQUE(SicilNo))";

const birim_query = "CREATE TABLE IF NOT EXISTS Birimler(BirimKodu int PRIMARY KEY NOT NULL, " +
    "BirimAdi VARCHAR(255) NOT NULL, UstBirimKodu int, BulunduguAdres VARCHAR(255) NOT NULL," +
    " IlKodu int NOT NULL, IlceKodu int NOT NULL, PostaKodu smallint NOT NULL, BirimMudurKullaniciAdi VARCHAR(150) NOT NULL," +
    "FOREIGN KEY(IlKodu) REFERENCES Iller(IlKodu), FOREIGN KEY(IlceKodu) REFERENCES Ilceler(IlceKodu), FOREIGN KEY(BirimMudurKullaniciAdi) REFERENCES Personel(KullaniciAdi)," +
    " FOREIGN KEY(UstBirimKodu) REFERENCES Birimler(BirimKodu))";

connection.query(personel_query,
    function (err, result) {
        if (err) throw err;
        console.log(result);
    });

connection.query(birim_query,
    function (err, result) {
        if (err) throw err;
        console.log(result);
    });

connection.query("CREATE TABLE IF NOT EXISTS Kullanicilar (KullaniciAdi VARCHAR(150) PRIMARY KEY NOT NULL," +
    " Şifre VARCHAR(255) NOT NULL )",
    function (err, result) {
        if (err) throw err;
        console.log(result);
    });

connection.query("CREATE TABLE IF NOT EXISTS Problem (ProblemTipiID tinyint PRIMARY KEY NOT NULL," +
    " ProblemTanimi VARCHAR(255) NOT NULL, ProblemiTanimlayiciAdi VARCHAR(255) NOT NULL, ProblemiTanimlayiciSoyadi VARCHAR(255) NOT NULL, ProblemiTanimlayanTCNOPasaportno VARCHAR(50) NOT NULL, HedeflenenAmacTanimi VARCHAR(255) NOT NULL)",
    function (err, result) {
        if (err) throw err;
        console.log(result);
    });

// Alantipi = müdahale(0) - çıktı(1)
connection.query("CREATE TABLE IF NOT EXISTS Alanlar (AlanID tinyint PRIMARY KEY NOT NULL," +
    " AlanAdi VARCHAR(255) NOT NULL, AlanTipi BOOLEAN NOT NULL, UNIQUE(AlanAdi) )",
    function (err, result) {
        if (err) throw err;
        console.log(result);
    });

// Alantipi = müdahale(0) - çıktı(1)
connection.query("CREATE TABLE IF NOT EXISTS Siniflar (SinifID tinyint PRIMARY KEY NOT NULL," +
    " SinifAdi VARCHAR(255) NOT NULL, AlanTipi BOOLEAN NOT NULL, UNIQUE(SinifAdi) )",
    function (err, result) {
        if (err) throw err;
        console.log(result);
    });

connection.query("CREATE TABLE IF NOT EXISTS Mudahale (MudahaleID tinyint PRIMARY KEY NOT NULL, AlanID tinyint NOT NULL,SinifID tinyint NOT NULL," +
    " MudahaleAdi VARCHAR(100) NOT NULL, FOREIGN KEY(AlanID) REFERENCES Alanlar(AlanID), FOREIGN KEY(SinifID) REFERENCES Siniflar(SinifID) )",
    function (err, result) {
        if (err) throw err;
        console.log(result);
    });

connection.query("CREATE TABLE IF NOT EXISTS Aktiviteler (AktiviteID tinyint PRIMARY KEY NOT NULL," +
    " AktiviteTanimi VARCHAR(255) NOT NULL )",
    function (err, result) {
        if (err) throw err;
        console.log(result);
    });

connection.query("CREATE TABLE IF NOT EXISTS MudahaleDetay (MudahaleID tinyint NOT NULL, AktiviteID tinyint NOT NULL, AlanID tinyint NOT NULL,SinifID tinyint NOT NULL," +
    " Sira tinyint NOT NULL, FOREIGN KEY(AlanID) REFERENCES Alanlar(AlanID), FOREIGN KEY(SinifID) REFERENCES Siniflar(SinifID) ," +
    " FOREIGN KEY(AktiviteID) REFERENCES Aktiviteler(AktiviteID), FOREIGN KEY(MudahaleID) REFERENCES Mudahale(MudahaleID) )",
    function (err, result) {
        if (err) throw err;
        console.log(result);
    });

connection.query("CREATE TABLE IF NOT EXISTS Cikti (CiktiID tinyint PRIMARY KEY NOT NULL, AlanID tinyint NOT NULL,SinifID tinyint NOT NULL," +
    " CiktiAdi VARCHAR(100) NOT NULL, FOREIGN KEY(AlanID) REFERENCES Alanlar(AlanID), FOREIGN KEY(SinifID) REFERENCES Siniflar(SinifID) )",
    function (err, result) {
        if (err) throw err;
        console.log(result);
    });

connection.query("CREATE TABLE IF NOT EXISTS Belirtecler (BelirtecID tinyint PRIMARY KEY NOT NULL," +
    " BelirtecTanimi VARCHAR(255) NOT NULL )",
    function (err, result) {
        if (err) throw err;
        console.log(result);
    });

connection.query("CREATE TABLE IF NOT EXISTS CiktiDetay (CiktiID tinyint PRIMARY KEY NOT NULL, AlanID tinyint NOT NULL,SinifID tinyint NOT NULL, BelirtecID tinyint NOT NULL," +
    " Sira VARCHAR(100) NOT NULL, FOREIGN KEY(AlanID) REFERENCES Alanlar(AlanID), FOREIGN KEY(SinifID) REFERENCES Siniflar(SinifID), FOREIGN KEY(BelirtecID) REFERENCES Belirtecler(BelirtecID))",
    function (err, result) {
        if (err) throw err;
        console.log(result);
    });

connection.query("CREATE TABLE IF NOT EXISTS ProblemBirim (ProblemID tinyint NOT NULL, BirimID int NOT NULL," +
    " EslesmeTarihi VARCHAR(255) NOT NULL , FOREIGN KEY(ProblemID) REFERENCES Problem(ProblemTipiID) , FOREIGN KEY(BirimID) REFERENCES Birimler(BirimKodu))",
    function (err, result) {
        if (err) throw err;
        console.log(result);
    });

module.exports = connection;