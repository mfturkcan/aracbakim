import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Giris = props => {
    const [errorMessage, setErrorMessage] = useState("");
    var regex_punch = new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleClick(event) {
        setErrorMessage("");

        // Noktalama işareti içeriyor mu?
        const includes_special = password.match(regex_punch) != null ? true : false;
        const is_longer = password.length >= 8 ? true : false;
        const includes_uppercase = password == password.toLowerCase() ? false : true;

        if (!is_longer) setErrorMessage("Şifre en az 8 harf olmalıdır.");
        if (!includes_special) setErrorMessage("Şifre en az bir noktalama işareti bulundurmak zorundadır.");
        if (!includes_uppercase) setErrorMessage("Şifre harf en az bir büyük harf içermelidir.");
        if (!username || !password) setErrorMessage("Lütfen formu doldurunuz.");

        if (!errorMessage) {

        }
    }

    return (
        <div>
            <form method="post" onSubmit={(e) => { e.preventDefault(); }} class="box">
                <h1>Yönetici/Personel Giriş</h1>
                <input type="text" name="username" placeholder="kullanıcı adı" class="email" onChange={(event) => { setUsername(event.target.value); }} />
                <input type="password" name="password" placeholder="şifre" class="email" onChange={(event) => { setPassword(event.target.value); }} />
                {errorMessage && <div style={{ color: "red", marginTop: "5px", fontSize: "12px" }}>{errorMessage}</div>}
                <a href="#"><button onClick={handleClick} id="btn2" className="btn">
                    Giriş
                </button></a>
            </form>
            <p>Kayıtlı değil misin?
                <Link to="/register">
                    <u style={{ color: "#f1c40f" }}>Hesap oluştur </u>
                </Link>
            </p>
        </div>
    );
}
export default Giris;