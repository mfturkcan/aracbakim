import { Edit, SimpleForm, TextInput, NumberInput, NullableBooleanInput } from "ra-ui-materialui";
import { required } from 'ra-core';

const SinifDuzenle = props => {
    return (
        <Edit id="SinifID" {...props}>
            <SimpleForm rowClick="edit">
                <NumberInput source="SinifID" label="SınıfID" validate={required()} />
                <TextInput source="SinifAdi" validate={required()} />
                <NullableBooleanInput style={{ width: "250px" }} validate={required()} source="AlanTipi" trueLabel="Mudahale(1)" falseLabel="Çıktı(0)" />

            </SimpleForm>
        </Edit>
    );
}
export default SinifDuzenle;