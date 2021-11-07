import { required } from "ra-core";
import { Create, SimpleForm, TextInput, NumberInput } from "ra-ui-materialui";

const ProblemEkle = props => {
    return (
        <Create id="ProblemID" {...props}>
            <SimpleForm>
                <NumberInput source="IlKodu" validate={required()} />
                <TextInput source="ProblemTanimi" validate={required()} />
                <TextInput source="ProblemiTanimlayiciAdi" validate={required()} />
                <TextInput source="ProblemiTanimlayiciSoyadi" validate={required()} />
                <TextInput source="ProblemiTanimlayanTCNOPasaportno" label="Tanimlayan TcNo & Pasaport" validate={required()} />
                <TextInput source="HedeflenenAmacTanimi" validate={required()} />
            </SimpleForm>
        </Create>
    );
}
export default ProblemEkle;


/*
    ProblemTipiID, ProblemTanimi, ProblemiTanimlayiciAdi, ProblemiTanimlayiciSoyadi
    , ProblemiTanimlayanTCNOPasaportno, HedeflenenAmacTanimi
*/