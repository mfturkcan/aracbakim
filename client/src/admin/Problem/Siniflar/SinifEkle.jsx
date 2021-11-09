import { Create, SimpleForm, TextInput, NumberInput, BooleanInput, NullableBooleanInput } from "ra-ui-materialui";
import { required } from 'ra-core';

const SinifEkle = props => {
    return (
        <Create id="SinifID" {...props}>
            <SimpleForm rowClick="edit">
                <NumberInput source="SinifID" label="SınıfID" validate={required()} />
                <TextInput source="SinifAdi" validate={required()} />
                <NullableBooleanInput style={{ width: "250px" }} validate={required()} source="AlanTipi" trueLabel="Mudahale(1)" falseLabel="Çıktı(0)" />
            </SimpleForm>
        </Create>
    );
}
export default SinifEkle;