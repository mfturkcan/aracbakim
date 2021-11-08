import { List, Datagrid, TextField, NumberField } from "ra-ui-materialui";
import CustomEmptyPage from "../CustomEmptyPage";

const ProblemListe = props => {
    return (
        <List id="ProblemID" {...props} empty={<CustomEmptyPage Adi="Problem" />}>
            <Datagrid rowClick="edit">
                <NumberField source="ProblemTipiID" label="Problem Tipi ID" />
                <TextField source="ProblemTanimi" />
                <TextField source="ProblemiTanimlayiciAdi" />
                <TextField source="ProblemiTanimlayiciSoyadi" />
                <TextField source="ProblemiTanimlayanTCNOPasaportno" label="Tanimlayan TcNo & Pasaport" />
                <TextField source="HedeflenenAmacTanimi" />
            </Datagrid>
        </List>
    );
}
export default ProblemListe;


/*
    ProblemTipiID, ProblemTanimi, ProblemiTanimlayiciAdi, ProblemiTanimlayiciSoyadi
    , ProblemiTanimlayanTCNOPasaportno, HedeflenenAmacTanimi
*/