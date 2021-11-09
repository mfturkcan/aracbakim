import { Create, SimpleForm, TextInput, NumberInput, NullableBooleanInput } from "ra-ui-materialui";
import { required } from 'ra-core';

const AlanlarEkle = props => {
    return (
        <Create id="AlanID" {...props}>
            <SimpleForm rowClick="edit">
                <NumberInput source="AlanID" validate={required()} label="AlanID" />
                <TextInput source="AlanAdi" validate={required()} />
                <NullableBooleanInput style={{ width: "250px" }} validate={required()} source="AlanTipi" trueLabel="Mudahale(1)" falseLabel="Çıktı(0)" />
            </SimpleForm>
        </Create>
    );
}
export default AlanlarEkle;