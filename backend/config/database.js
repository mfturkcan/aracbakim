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

        connection.query("CREATE TABLE IF NOT EXISTS Ilceler(IlceKodu int NOT NULL," +
            " IlceAdi VARCHAR(100) NOT NULL, IlKodu int  NOT NULL, FOREIGN KEY (IlKodu) REFERENCES Iller(IlKodu), PRIMARY KEY(IlceKodu, IlKodu))",
            function (err, result) {
                if (err) console.log(err);
            });

        const personel_query = "CREATE TABLE IF NOT EXISTS Personel(KullaniciAdi VARCHAR(150) PRIMARY KEY NOT NULL, Email VARCHAR(255) NOT NULL" +
            ", Ad VARCHAR(255) NOT NULL, Soyad VARCHAR(255) NOT NULL, SicilNo VARCHAR(50) NOT NULL," +
            " Cep VARCHAR(15) NOT NULL, EvAdresi VARCHAR(255) NOT NULL, IlKodu int NOT NULL," +
            " IlceKodu VARCHAR(250) NOT NULL, PostaKodu int NOT NULL, UstKullaniciAdi VARCHAR(150)," +
            " CalistigiBirimKodu int, FOREIGN KEY(IlKodu) REFERENCES Iller(IlKodu), " +
            " UNIQUE(Email), UNIQUE(SicilNo))";

        const birim_query = "CREATE TABLE IF NOT EXISTS Birimler(BirimKodu int PRIMARY KEY NOT NULL, " +
            "BirimAdi VARCHAR(255) NOT NULL, UstBirimKodu int, BulunduguAdres VARCHAR(255) NOT NULL," +
            " IlKodu int NOT NULL, IlceKodu VARCHAR(250) NOT NULL, PostaKodu int NOT NULL, BirimMudurKullaniciAdi VARCHAR(150)," +
            "FOREIGN KEY(IlKodu) REFERENCES Iller(IlKodu), FOREIGN KEY(BirimMudurKullaniciAdi) REFERENCES Personel(KullaniciAdi)," +
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

        connection.query("CREATE TABLE IF NOT EXISTS Mudahale (MudahaleID int NOT NULL, AlanID int NOT NULL,SinifID int NOT NULL," +
            " MudahaleAdi VARCHAR(100) NOT NULL, FOREIGN KEY(AlanID) REFERENCES Alanlar(AlanID), FOREIGN KEY(SinifID) REFERENCES Siniflar(SinifID), PRIMARY KEY(MudahaleID, AlanID, SinifID) )",
            function (err, result) {
                if (err) console.log(err);

            });

        connection.query("CREATE TABLE IF NOT EXISTS Aktiviteler (AktiviteID int PRIMARY KEY NOT NULL," +
            " AktiviteTanimi VARCHAR(255) NOT NULL )",
            function (err, result) {
                if (err) console.log(err);

            });

        connection.query("CREATE TABLE IF NOT EXISTS MudahaleDetay (MudahaleID VARCHAR(255) NOT NULL, AktiviteID int NOT NULL, AlanID int NOT NULL,SinifID int NOT NULL," +
            " Sira int NOT NULL, FOREIGN KEY(AlanID) REFERENCES Alanlar(AlanID), FOREIGN KEY(SinifID) REFERENCES Siniflar(SinifID) ," +
            " FOREIGN KEY(AktiviteID) REFERENCES Aktiviteler(AktiviteID), PRIMARY KEY(MudahaleID, AktiviteID, AlanID, SinifID))",
            function (err, result) {
                if (err) console.log(err);
            });

        connection.query("CREATE TABLE IF NOT EXISTS Cikti (CiktiID int NOT NULL, AlanID int NOT NULL,SinifID int NOT NULL," +
            " CiktiAdi VARCHAR(100) NOT NULL, FOREIGN KEY(AlanID) REFERENCES Alanlar(AlanID), FOREIGN KEY(SinifID) REFERENCES Siniflar(SinifID), PRIMARY KEY(CiktiID, SinifID, AlanID) )",
            function (err, result) {
                if (err) console.log(err);

            });

        connection.query("CREATE TABLE IF NOT EXISTS Belirtecler (BelirtecID int PRIMARY KEY NOT NULL," +
            " BelirtecTanimi VARCHAR(255) NOT NULL )",
            function (err, result) {
                if (err) console.log(err);

            });

        connection.query("CREATE TABLE IF NOT EXISTS CiktiDetay (CiktiID int NOT NULL, AlanID int NOT NULL,SinifID int NOT NULL, BelirtecID int NOT NULL," +
            " Sira VARCHAR(100) NOT NULL, FOREIGN KEY(AlanID) REFERENCES Alanlar(AlanID), FOREIGN KEY(SinifID) REFERENCES Siniflar(SinifID), FOREIGN KEY(BelirtecID) REFERENCES Belirtecler(BelirtecID), PRIMARY KEY(AlanID,CiktiID,SinifID,BelirtecID,Sira))",
            function (err, result) {
                if (err) console.log(err)

            });

        connection.query("CREATE TABLE IF NOT EXISTS ProblemBirim (ProblemID int NOT NULL, BirimID int NOT NULL," +
            " EslesmeTarihi DATETIME NOT NULL , FOREIGN KEY(ProblemID) REFERENCES Problem(ProblemTipiID) , FOREIGN KEY(BirimID) REFERENCES Birimler(BirimKodu), PRIMARY KEY(ProblemID, BirimID))",
            function (err, result) {
                if (err) console.log(err);
            });
        connection.query("CREATE TABLE IF NOT EXISTS ProblemMudahale (MudahaleID VARCHAR(255) NOT NULL, AlanID int NOT NULL, ProblemID int NOT NULL, SinifID int NOT NULL,"
            +" FOREIGN KEY(AlanID) REFERENCES Alanlar(AlanID),FOREIGN KEY(ProblemID) REFERENCES Problem(ProblemTipiID), FOREIGN KEY(SinifID) REFERENCES Siniflar(SinifID), PRIMARY KEY(AlanID, SinifID, MudahaleID, ProblemID))",
            function(err, result){
                if(err) console.log(err);
            });

        connection.query("CREATE TABLE IF NOT EXISTS ProblemCikti (CiktiID VARCHAR(255) NOT NULL, AlanID int NOT NULL, ProblemID int NOT NULL, SinifID int NOT NULL,"
            +"FOREIGN KEY(AlanID) REFERENCES Alanlar(AlanID),FOREIGN KEY(ProblemID) REFERENCES Problem(ProblemTipiID), FOREIGN KEY(SinifID) REFERENCES Siniflar(SinifID), PRIMARY KEY(CiktiID, ProblemID, SinifID, AlanID))",
            function(err, result){
                if(err) console.log(err);
            });

        connection.query("CREATE TABLE IF NOT EXISTS IlaveMudahaleDetay (MudahaleID VARCHAR(255) NOT NULL, AktiviteID int NOT NULL, AlanID int NOT NULL, SinifID int NOT NULL, ProblemID int NOT NULL,"+
            " Sira int NOT NULL, EkleyenKullaniciAdi VARCHAR(150) NOT NULL, EklenmeTarihi DATETIME NOT NULL, FOREIGN KEY(AlanID) REFERENCES Alanlar(AlanID), FOREIGN KEY(SinifID) REFERENCES Siniflar(SinifID) ," +
            " FOREIGN KEY(AktiviteID) REFERENCES Aktiviteler(AktiviteID), FOREIGN KEY(ProblemID) REFERENCES Problem(ProblemTipiID), FOREIGN KEY(EkleyenKullaniciAdi) REFERENCES Kullanicilar(KullaniciAdi), PRIMARY KEY(ProblemID, AlanID, SinifID, MudahaleID, AktiviteID))",
            function (err, result) {
                if (err) console.log(err);
            });

        connection.query("CREATE TABLE IF NOT EXISTS IlaveCiktiDetay (MudahaleID VARCHAR(255) NOT NULL, BelirtecID int NOT NULL, AlanID int NOT NULL,SinifID int NOT NULL, ProblemID int NOT NULL," +
            " Sira int NOT NULL, EkleyenKullaniciAdi VARCHAR(150) NOT NULL, EklenmeTarihi DATETIME NOT NULL, FOREIGN KEY(AlanID) REFERENCES Alanlar(AlanID), FOREIGN KEY(SinifID) REFERENCES Siniflar(SinifID) ," +
            " FOREIGN KEY(BelirtecID) REFERENCES Belirtecler(BelirtecID), FOREIGN KEY(ProblemID) REFERENCES Problem(ProblemTipiID), FOREIGN KEY(EkleyenKullaniciAdi) REFERENCES Kullanicilar(KullaniciAdi), PRIMARY KEY(ProblemID, AlanID, SinifID, MudahaleID, BelirtecID))",
            function (err, result) {
                if (err) console.log(err);
            });

        connection.query("CREATE TABLE IF NOT EXISTS PersonelProblem (KullaniciAdi VARCHAR(150) NOT NULL," +
            " ProblemID int NOT NULL, FOREIGN KEY(KullaniciAdi) REFERENCES Personel(KullaniciAdi),FOREIGN KEY(ProblemID) REFERENCES Problem(ProblemTipiID), PRIMARY KEY(KullaniciAdi, ProblemID) )",
            function (err, result) {
                if (err) console.log(err);
            });

        connection.query("CREATE TABLE IF NOT EXISTS ProblemCiktiDegerlendirme (BelirtecID int NOT NULL," +
            " ProblemID int NOT NULL,  Skor tinyint, SkorTarihi DATETIME NOT NULL, FOREIGN KEY(ProblemID) REFERENCES Problem(ProblemTipiID), FOREIGN KEY(BelirtecID) REFERENCES Belirtecler(BelirtecID), PRIMARY KEY(ProblemID, BelirtecID) )",
            function (err, result) {
                if (err) console.log(err);
            });
        connection.query("CREATE TABLE IF NOT EXISTS ProblemDurumDegerlendirme (YeniProblemID int NOT NULL," +
            " ProblemID int NOT NULL, YeniProblemTanimi VARCHAR(255) NOT NULL, YeniHedef VARCHAR(255) NOT NULL, OncekiProblemSkoru tinyint, TahminEdilenProblemSkoru tinyint NOT NULL, DegerlendirmeTarihi DATETIME NOT NULL, DegerlendirenKullaniciAdi VARCHAR(150) NOT NULL,"+
            " FOREIGN KEY(ProblemID) REFERENCES Problem(ProblemTipiID), FOREIGN KEY(YeniProblemID) REFERENCES Problem(ProblemTipiID), FOREIGN KEY(DegerlendirenKullaniciAdi) REFERENCES Personel(KullaniciAdi), PRIMARY KEY(ProblemID, YeniProblemID) )",
            function (err, result) {
                if (err) console.log(err);
            });
        connection.query("CREATE TABLE IF NOT EXISTS CalisanProblem (KullaniciAdi VARCHAR(150) NOT NULL," +
            " ProblemID int NOT NULL,AktiviteAciklama VARCHAR(255) NOT NULL, Tarihi DATETIME NOT NULL, MudahaleID VARCHAR(255) NOT NULL, AktiviteID int NOT NULL, AlanID int NOT NULL, SinifID int NOT NULL,FOREIGN KEY(AlanID) REFERENCES Alanlar(AlanID), FOREIGN KEY(SinifID) REFERENCES Siniflar(SinifID) ," +
            " FOREIGN KEY(AktiviteID) REFERENCES Aktiviteler(AktiviteID), FOREIGN KEY(KullaniciAdi) REFERENCES Personel(KullaniciAdi),FOREIGN KEY(ProblemID) REFERENCES Problem(ProblemTipiID), PRIMARY KEY(ProblemID, KullaniciAdi, AlanID, SinifID, MudahAleID, AktiviteID) )",
            function (err, result) {
                if (err) console.log(err);
            });
    }
});



module.exports = connection;