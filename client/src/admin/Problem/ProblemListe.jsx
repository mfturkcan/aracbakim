import { List, Datagrid, TextField, NumberField } from "ra-ui-materialui";

const ProblemListe = props => {
    return (
        <List id="ProblemID" {...props}>
            <Datagrid rowClick="edit">
                <NumberField source="IlKodu" />
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