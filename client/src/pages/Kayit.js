import { useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../App";
import { useHistory } from "react-router";

const Kayit = props => {
    let history = useHistory();

    const [errorMessage, setErrorMessage] = useState("");
    var regex_punch = new RegExp(/[`!@#$%^&*()_+\-=\[\];':"\\|,.<>\/?~]/);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleClick(event) {
        setErrorMessage("");

        // Noktalama işareti içeriyor mu?
        const includes_special = password.match(regex_punch) != null ? true : false;
        const is_longer = password.length >= 8 ? true : false;
        const includes_uppercase = password == password.toLowerCase() ? false : true;

        if (!is_longer) setErrorMessage("Şifre en az 8 harf olmalıdır.");
        if (!includes_special) setErrorMessage("Şifre en az bir noktalama işareti bulundurmak zorundadır.");
        if (!includes_uppercase) setErrorMessage("Şifre harf en az bir büyük harf içermelidir.");
        if (!username || !password) setErrorMessage("Lütfen formu doldurunuz.");

        if (errorMessage == "") {
            const { data } = await axiosInstance.post("/register", { username, password });
            console.log(data);

            if (data.result) {
                history.push("/admin");
            } else {
                setErrorMessage(data.message);
            }
        }
    }

    return (
        <div>
            <form method="post" onSubmit={(e) => { e.preventDefault(); }} class="box">
                <h1>Yönetici Kayıt</h1>
                <input type="text" name="username" placeholder="kullanıcı adı" class="email" onChange={(event) => { setUsername(event.target.value); }} />
                <input type="password" name="password" placeholder="şifre" class="email" onChange={(event) => { setPassword(event.target.value); }} />
                {errorMessage && <div style={{ color: "red", marginTop: "5px", fontSize: "12px" }}>{errorMessage}</div>}
                <a href="#">
                    <button onClick={handleClick} id="btn2">
                        Kayıt
                    </button>
                </a>
            </form>
            <p>Zaten hesabın var mı?
                <Link to="/login">
                    <u style={{ color: "#f1c40f" }}>Giriş yap</u>
                </Link>
            </p>
        </div>
    );
}
export default Kayit;