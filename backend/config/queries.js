const connection = require("mysql2");

connection.query("CREATE TABLE IF NOT EXISTS Problem (ProblemTipiID tinyint PRIMARY KEY NOT NULL," +
    " ProblemTanimi VARCHAR(255) NOT NULL, Problemi TanimlayiciAdi VARCHAR(255) NOT NULL, ProblemiTanimlayiciSoyadi VARCHAR(255) NOT NULL, ProblemiTanimlayanTCNOPasaportno VARCHAR(50) NOT NULL, HedeflenenAmacTanimi VARCHAR(255) NOT NULL)",
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

connection.query("CREATE TABLE IF NOT EXISTS CiktiDetay (CiktiID tinyint PRIMARY KEY NOT NULL, AlanID tinyint NOT NULL,SinifID tinyint NOT NULL, BelirtecID tinyint NOT NULL" +
    " Sira VARCHAR(100) NOT NULL, FOREIGN KEY(AlanID) REFERENCES Alanlar(AlanID), FOREIGN KEY(SinifID) REFERENCES Siniflar(SinifID), FOREIGN KEY(BelirtecID) REFERENCES Belirtecler(BelirtecID))",
    function (err, result) {
        if (err) throw err;
        console.log(result);
    });

connection.query("CREATE TABLE IF NOT EXISTS ProblemBirim (ProblemID tinyint NOT NULL, BirimID tinyint NOT NULL," +
    " EslesmeTarihi VARCHAR(255) NOT NULL , FOREIGN KEY(ProblemID) REFERENCES Problem(ProblemID) , FOREIGN KEY(BirimID) REFERENCES Birimler(BirimID))",
    function (err, result) {
        if (err) throw err;
        console.log(result);
    });