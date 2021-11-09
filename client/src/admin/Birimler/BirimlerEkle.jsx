import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';


// Kullanılmayacak
const BirimlerEkle = props => {
    let history = useHistory();

    function handleClick() {
        history.push("/kullanicilar/create");
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            Birimler ancak BirimMüdür ile birlikte oluşturulabilir.
            <Button onClick={handleClick} style={{ width: "100px", marginTop: "20px", backgroundColor: "blueviolet", color: "white" }}>Oluştur</Button>
        </div>
    );
}
export default BirimlerEkle;
