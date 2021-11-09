import { required } from "ra-core";
import { Create, SimpleForm, TextInput, NumberInput, ReferenceInput, SelectInput, ReferenceField } from "ra-ui-materialui";
import { FunctionField } from "react-admin";

const ProblemEkle = props => {
    return (
        <Create id="ProblemTipiID" {...props}>
            <SimpleForm>
                <NumberInput source="ProblemTipiID" label="Problem Tipi ID" validate={required()} />
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