import { Create, SimpleForm, TextInput, NumberInput } from "ra-ui-materialui";

const ProblemEkle = props => {
    return (
        <Create id="ProblemID" {...props}>
            <SimpleForm>
                <NumberInput source="IlKodu" />
                <TextInput source="ProblemTanimi" />
                <TextInput source="ProblemiTanimlayiciAdi" />
                <TextInput source="ProblemiTanimlayiciSoyadi" />
                <TextInput source="ProblemiTanimlayanTCNOPasaportno" />
                <TextInput source="HedeflenenAmacTanimi" />
            </SimpleForm>
        </Create>
    );
}
export default ProblemEkle;


/*
    ProblemTipiID, ProblemTanimi, ProblemiTanimlayiciAdi, ProblemiTanimlayiciSoyadi
    , ProblemiTanimlayanTCNOPasaportno, HedeflenenAmacTanimi
*/