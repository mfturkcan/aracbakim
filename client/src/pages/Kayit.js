import { useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../App";
import { useHistory } from "react-router";
import { useAuth } from "../context/AuthContext";

const Kayit = props => {
    let history = useHistory();

    const [user, setUser] = useAuth();
    const [errorMessage, setErrorMessage] = useState("");
    var regex_punch = new RegExp(/[`!@#$%^&*()_+\-=\[\];':"\\|,.<>\/?~]/);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleClick(event) {

        // Noktalama işareti içeriyor mu?
        const includes_special = password.match(regex_punch) != null ? true : false;
        const is_longer = password.length >= 8 ? true : false;
        const includes_uppercase = password == password.toLowerCase() ? false : true;

        if (!is_longer) {
            setErrorMessage("Şifre en az 8 harf olmalıdır.");
        }
        else if (!includes_special) {
            setErrorMessage("Şifre en az bir noktalama işareti bulundurmak zorundadır.");
        }
        else if (!includes_uppercase) {
            setErrorMessage("Şifre harf en az bir büyük harf içermelidir.");
        }
        else {
            console.log(errorMessage);
            const { data } = await axiosInstance.post("/register", { username, password });
            console.log(data);
            if (data.result) {
                setUser(data.user);
                history.push("/admin");
            } else {
                setErrorMessage(data.message);
            }
        }

    }

    return (
        <div>
            <form method="post" onSubmit={(e) => { e.preventDefault(); }} className="box">
                <h1>Yönetici Kayıt</h1>
                <input type="text" name="username" placeholder="kullanıcı adı" className="email" onChange={(event) => { setUsername(event.target.value); }} />
                <input type="password" name="password" placeholder="şifre" className="email" onChange={(event) => { setPassword(event.target.value); }} />
                {errorMessage && <div style={{ color: "red", marginTop: "5px", fontSize: "12px" }}>{errorMessage}</div>}
                <a href="#">
                    <button onClick={(e) => { setErrorMessage(""); handleClick(e); }} id="btn2">
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