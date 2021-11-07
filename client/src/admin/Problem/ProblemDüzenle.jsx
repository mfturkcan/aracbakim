import { Edit, SimpleForm, TextInput, NumberInput } from "ra-ui-materialui";

const ProblemEkle = props => {
    return (
        <Edit id="ProblemID" {...props}>
            <SimpleForm>
                <NumberInput source="IlKodu" />
                <TextInput source="ProblemTanimi" />
                <TextInput source="ProblemiTanimlayiciAdi" />
                <TextInput source="ProblemiTanimlayiciSoyadi" />
                <TextInput source="ProblemiTanimlayanTCNOPasaportno" />
                <TextInput source="HedeflenenAmacTanimi" />
            </SimpleForm>
        </Edit>
    );
}
export default ProblemEkle;


/*
    ProblemTipiID, ProblemTanimi, ProblemiTanimlayiciAdi, ProblemiTanimlayiciSoyadi
    , ProblemiTanimlayanTCNOPasaportno, HedeflenenAmacTanimi
*/