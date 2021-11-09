import { Edit, SimpleForm, TextInput, NumberInput } from "ra-ui-materialui";
import { required } from "ra-core";

const ProblemEkle = props => {
    return (
        <Edit id="ProblemTipiID" {...props}>
            <SimpleForm>
                <NumberInput source="ProblemTipiID" label="Problem Tipi ID" validate={required()} />
                <TextInput source="ProblemTanimi" validate={required()} />
                <TextInput source="ProblemiTanimlayiciAdi" validate={required()} />
                <TextInput source="ProblemiTanimlayiciSoyadi" validate={required()} />
                <TextInput source="ProblemiTanimlayanTCNOPasaportno" label="Tanimlayan TcNo & Pasaport" validate={required()} />
                <TextInput source="HedeflenenAmacTanimi" validate={required()} />
            </SimpleForm>
        </Edit>
    );
}
export default ProblemEkle;


/*
    ProblemTipiID, ProblemTanimi, ProblemiTanimlayiciAdi, ProblemiTanimlayiciSoyadi
    , ProblemiTanimlayanTCNOPasaportno, HedeflenenAmacTanimi
*/