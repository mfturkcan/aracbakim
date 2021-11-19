const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    multipleStatements: true,
    waitForConnections: true,
});

connection.query("CREATE DATABASE IF NOT EXISTS db; USE db;", function (err, result) {
    if (err) console.log(err);
    else {
        connection.config.database = "db";
        console.log("Database created");

        connection.connect(function (err) {
            if (err) {
                console.log(err);
            }
            console.log("Connected successful");
        });

        connection.query("SET foreign_key_checks = 0;");


        connection.query("CREATE TABLE IF NOT EXISTS Iller(IlKodu int PRIMARY KEY NOT NULL," +
            " IlAdi VARCHAR(100) NOT NULL)", function (err, result) {
                if (err) console.log(err);

            });

        connection.query("CREATE TABLE IF NOT EXISTS Ilceler(IlceKodu int PRIMARY KEY NOT NULL," +
            " IlceAdi VARCHAR(100) NOT NULL, IlKodu int  NOT NULL, FOREIGN KEY (IlKodu) REFERENCES Iller(IlKodu))",
            function (err, result) {
                if (err) console.log(err);

            });

        const personel_query = "CREATE TABLE IF NOT EXISTS Personel(KullaniciAdi VARCHAR(150) PRIMARY KEY NOT NULL, Email VARCHAR(255) NOT NULL" +
            ", Ad VARCHAR(255) NOT NULL, Soyad VARCHAR(255) NOT NULL, SicilNo VARCHAR(50) NOT NULL," +
            " Cep VARCHAR(15) NOT NULL, EvAdresi VARCHAR(255) NOT NULL, IlKodu int NOT NULL," +
            " IlceKodu int NOT NULL, PostaKodu int NOT NULL, UstKullaniciAdi VARCHAR(150)," +
            " CalistigiBirimKodu int, FOREIGN KEY(IlKodu) REFERENCES Iller(IlKodu), " +
            "FOREIGN KEY(IlceKodu) REFERENCES Ilceler(IlceKodu), UNIQUE(Email), UNIQUE(SicilNo))";

        const birim_query = "CREATE TABLE IF NOT EXISTS Birimler(BirimKodu int PRIMARY KEY NOT NULL, " +
            "BirimAdi VARCHAR(255) NOT NULL, UstBirimKodu int, BulunduguAdres VARCHAR(255) NOT NULL," +
            " IlKodu int NOT NULL, IlceKodu int NOT NULL, PostaKodu int NOT NULL, BirimMudurKullaniciAdi VARCHAR(150)," +
            "FOREIGN KEY(IlKodu) REFERENCES Iller(IlKodu), FOREIGN KEY(IlceKodu) REFERENCES Ilceler(IlceKodu), FOREIGN KEY(BirimMudurKullaniciAdi) REFERENCES Personel(KullaniciAdi)," +
            " FOREIGN KEY(UstBirimKodu) REFERENCES Birimler(BirimKodu))";

        connection.query(personel_query,
            function (err, result) {
                if (err) console.log(err);

            });

        connection.query(birim_query,
            function (err, result) {
                if (err) console.log(err);

            });

        connection.query("CREATE TABLE IF NOT EXISTS Kullanicilar (KullaniciAdi VARCHAR(150) PRIMARY KEY NOT NULL," +
            " Şifre VARCHAR(255) NOT NULL )",
            function (err, result) {
                if (err) console.log(err);
            });

        connection.query("CREATE TABLE IF NOT EXISTS Problem (ProblemTipiID int PRIMARY KEY NOT NULL," +
            " ProblemTanimi VARCHAR(255) NOT NULL, ProblemiTanimlayiciAdi VARCHAR(255) NOT NULL, ProblemiTanimlayiciSoyadi VARCHAR(255) NOT NULL, ProblemiTanimlayanTCNOPasaportno VARCHAR(50) NOT NULL, HedeflenenAmacTanimi VARCHAR(255) NOT NULL)",
            function (err, result) {
                if (err) console.log(err);

            });

        // Alantipi = müdahale(0) - çıktı(1)
        connection.query("CREATE TABLE IF NOT EXISTS Alanlar (AlanID int PRIMARY KEY NOT NULL," +
            " AlanAdi VARCHAR(255) NOT NULL, AlanTipi BOOLEAN NOT NULL, UNIQUE(AlanAdi) )",
            function (err, result) {
                if (err) console.log(err);

            });

        // Alantipi = müdahale(0) - çıktı(1)
        connection.query("CREATE TABLE IF NOT EXISTS Siniflar (SinifID int PRIMARY KEY NOT NULL," +
            " SinifAdi VARCHAR(255) NOT NULL, AlanTipi BOOLEAN NOT NULL, UNIQUE(SinifAdi) )",
            function (err, result) {
                if (err) console.log(err);

            });

        connection.query("CREATE TABLE IF NOT EXISTS Mudahale (MudahaleID int PRIMARY KEY NOT NULL, AlanID int NOT NULL,SinifID int NOT NULL," +
            " MudahaleAdi VARCHAR(100) NOT NULL, FOREIGN KEY(AlanID) REFERENCES Alanlar(AlanID), FOREIGN KEY(SinifID) REFERENCES Siniflar(SinifID) )",
            function (err, result) {
                if (err) console.log(err);

            });

        connection.query("CREATE TABLE IF NOT EXISTS Aktiviteler (AktiviteID int PRIMARY KEY NOT NULL," +
            " AktiviteTanimi VARCHAR(255) NOT NULL )",
            function (err, result) {
                if (err) console.log(err);

            });

        connection.query("CREATE TABLE IF NOT EXISTS MudahaleDetay (MudahaleID int NOT NULL, AktiviteID int PRIMARY KEY NOT NULL, AlanID int NOT NULL,SinifID int NOT NULL," +
            " Sira int NOT NULL, FOREIGN KEY(AlanID) REFERENCES Alanlar(AlanID), FOREIGN KEY(SinifID) REFERENCES Siniflar(SinifID) ," +
            " FOREIGN KEY(AktiviteID) REFERENCES Aktiviteler(AktiviteID), FOREIGN KEY(MudahaleID) REFERENCES Mudahale(MudahaleID))",
            function (err, result) {
                if (err) console.log(err);
            });

        connection.query("CREATE TABLE IF NOT EXISTS Cikti (CiktiID int PRIMARY KEY NOT NULL, AlanID int NOT NULL,SinifID int NOT NULL," +
            " CiktiAdi VARCHAR(100) NOT NULL, FOREIGN KEY(AlanID) REFERENCES Alanlar(AlanID), FOREIGN KEY(SinifID) REFERENCES Siniflar(SinifID) )",
            function (err, result) {
                if (err) console.log(err);

            });

        connection.query("CREATE TABLE IF NOT EXISTS Belirtecler (BelirtecID int PRIMARY KEY NOT NULL," +
            " BelirtecTanimi VARCHAR(255) NOT NULL )",
            function (err, result) {
                if (err) console.log(err);

            });

        connection.query("CREATE TABLE IF NOT EXISTS CiktiDetay (CiktiID int PRIMARY KEY NOT NULL, AlanID int NOT NULL,SinifID int NOT NULL, BelirtecID int NOT NULL," +
            " Sira VARCHAR(100) NOT NULL, FOREIGN KEY(AlanID) REFERENCES Alanlar(AlanID), FOREIGN KEY(SinifID) REFERENCES Siniflar(SinifID), FOREIGN KEY(BelirtecID) REFERENCES Belirtecler(BelirtecID))",
            function (err, result) {
                if (err) console.log(err);

            });

        connection.query("CREATE TABLE IF NOT EXISTS ProblemBirim (ProblemID int NOT NULL, BirimID int NOT NULL," +
            " EslesmeTarihi DATETIME NOT NULL , FOREIGN KEY(ProblemID) REFERENCES Problem(ProblemTipiID) , FOREIGN KEY(BirimID) REFERENCES Birimler(BirimKodu))",
            function (err, result) {
                if (err) console.log(err);
            });
        connection.query("CREATE TABLE IF NOT EXISTS ProblemMudahale (MudahaleID int PRIMARY KEY NOT NULL, AlanID int NOT NULL, ProblemID int NOT NULL, SinifID int NOT NULL,"
            +" FOREIGN KEY(MudahaleID) REFERENCES Mudahale(MudahaleID), FOREIGN KEY(AlanID) REFERENCES Alanlar(AlanID),FOREIGN KEY(ProblemID) REFERENCES Problem(ProblemTipiID), FOREIGN KEY(SinifID) REFERENCES Siniflar(SinifID))",
            function(err, result){
                if(err) console.log(err);
            });

        connection.query("CREATE TABLE IF NOT EXISTS ProblemCikti (CiktiID int PRIMARY KEY NOT NULL, AlanID int NOT NULL, ProblemID int NOT NULL, SinifID int NOT NULL,"
            +" FOREIGN KEY(CiktiID) REFERENCES Cikti(CiktiID), FOREIGN KEY(AlanID) REFERENCES Alanlar(AlanID),FOREIGN KEY(ProblemID) REFERENCES Problem(ProblemTipiID), FOREIGN KEY(SinifID) REFERENCES Siniflar(SinifID))",
            function(err, result){
                if(err) console.log(err);
            });

        // FK - EkleyenKullaniciAdi, EklenmeTarihi DATETIME
        connection.query("CREATE TABLE IF NOT EXISTS IlaveMudahaleDetay (MudahaleID int NOT NULL, AktiviteID int PRIMARY KEY NOT NULL, AlanID int NOT NULL, SinifID int NOT NULL, ProblemID int NOT NULL,"+
            " Sira int NOT NULL, EkleyenKullaniciAdi VARCHAR(150) NOT NULL, EklenmeTarihi DATETIME NOT NULL, FOREIGN KEY(AlanID) REFERENCES Alanlar(AlanID), FOREIGN KEY(SinifID) REFERENCES Siniflar(SinifID) ," +
            " FOREIGN KEY(AktiviteID) REFERENCES Aktiviteler(AktiviteID), FOREIGN KEY(MudahaleID) REFERENCES Mudahale(MudahaleID), FOREIGN KEY(ProblemID) REFERENCES Problem(ProblemTipiID), FOREIGN KEY(EkleyenKullaniciAdi) REFERENCES Kullanicilar(KullaniciAdi))",
            function (err, result) {
                if (err) console.log(err);
            });

        // FK - EkleyenKullaniciAdi, EklenmeTarihi DATETIME
        connection.query("CREATE TABLE IF NOT EXISTS IlaveCiktiDetay (MudahaleID int NOT NULL, BelirtecID int PRIMARY KEY NOT NULL, AlanID int NOT NULL,SinifID int NOT NULL, ProblemID int NOT NULL," +
            " Sira int NOT NULL, EkleyenKullaniciAdi VARCHAR(150) NOT NULL, EklenmeTarihi DATETIME NOT NULL, FOREIGN KEY(AlanID) REFERENCES Alanlar(AlanID), FOREIGN KEY(SinifID) REFERENCES Siniflar(SinifID) ," +
            " FOREIGN KEY(BelirtecID) REFERENCES Belirtecler(BelirtecID), FOREIGN KEY(MudahaleID) REFERENCES Mudahale(MudahaleID), FOREIGN KEY(ProblemID) REFERENCES Problem(ProblemTipiID), FOREIGN KEY(EkleyenKullaniciAdi) REFERENCES Kullanicilar(KullaniciAdi))",
            function (err, result) {
                if (err) console.log(err);
            });

        connection.query("CREATE TABLE IF NOT EXISTS PersonelProblem (KullaniciAdi VARCHAR(150) PRIMARY KEY NOT NULL," +
            " ProblemID int NOT NULL, FOREIGN KEY(KullaniciAdi) REFERENCES Personel(KullaniciAdi),FOREIGN KEY(ProblemID) REFERENCES Problem(ProblemTipiID) )",
            function (err, result) {
                if (err) console.log(err);
            });

        connection.query("CREATE TABLE IF NOT EXISTS ProblemCiktiDegerlendirme (BelirtecID int  PRIMARY KEY NOT NULL," +
            " ProblemID int NOT NULL,  Skor tinyint, SkorTarihi DATETIME, FOREIGN KEY(ProblemID) REFERENCES Problem(ProblemTipiID), FOREIGN KEY(BelirtecID) REFERENCES Belirtecler(BelirtecID) )",
            function (err, result) {
                if (err) console.log(err);
            });
    }
});



module.exports = connection;