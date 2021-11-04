const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "db",
});



connection.connect(function (err) {
    if (err) {
        console.log(err);
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

// const personel_query = "CREATE TABLE IF NOT EXISTS Personel(KullaniciAdi VARCHAR(150) PRIMARY KEY NOT NULL, Email VARCHAR(255) NOT NULL" +
//     ", Ad VARCHAR(255) NOT NULL, Soyad VARCHAR(255) NOT NULL, SicilNo VARCHAR(50) NOT NULL," +
//     " Cep VARCHAR(15) NOT NULL, EvAdresi VARCHAR(255) NOT NULL, IlKodu int NOT NULL," +
//     " IlceKodu int NOT NULL, PostaKodu smallint NOT NULL, UstKullaniciAdi VARCHAR(150)," +
//     " CalistigiBirimKodu int, FOREIGN KEY(IlKodu) REFERENCES Iller(IlKodu), " +
//     "FOREIGN KEY(IlceKodu) REFERENCES Ilceler(IlceKodu), UNIQUE(Email), UNIQUE(SicilNo))";

// const birim_query = "CREATE TABLE IF NOT EXISTS Birimler(BirimKodu int PRIMARY KEY NOT NULL, " +
//     "BirimAdi VARCHAR(255) NOT NULL, UstBirimKodu int NOT NULL, BulunduguAdres VARCHAR(255) NOT NULL," +
//     " IlKodu int NOT NULL, IlceKodu int NOT NULL, PostaKodu smallint NOT NULL, BirimMudurKullaniciAdi VARCHAR(150) NOT NULL," +
//     "FOREIGN KEY(IlKodu) REFERENCES Iller(IlKodu), FOREIGN KEY(IlceKodu) REFERENCES Ilceler(IlceKodu), FOREIGN KEY(BirimMudurKullaniciAdi) REFERENCES Personel(KullaniciAdi)," +
//     " FOREIGN KEY(UstBirimKodu) REFERENCES Birimler(BirimKodu))";

// connection.query(personel_query,
//     function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });

// connection.query(birim_query,
//     function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     });

// KullaniciRolu 0-yönetici, 1- birim müdürü
connection.query("CREATE TABLE IF NOT EXISTS Kullanicilar (KullaniciAdi VARCHAR(150) PRIMARY KEY NOT NULL," +
    " Şifre VARCHAR(255) NOT NULL, KullaniciRolu tinyint NOT NULL )",
    function (err, result) {
        if (err) throw err;
        console.log(result);
    });

// connection.query("ALTER TABLE Personel ADD CONSTRAINT birim_fk FOREIGN KEY(CalistigiBirimKodu) REFERENCES Birimler(BirimKodu)",
//     function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     })

module.exports = connection;