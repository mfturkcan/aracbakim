import { Edit, SimpleForm, TextInput, NumberInput, NullableBooleanInput } from "ra-ui-materialui";
import { required } from 'ra-core';
import { FunctionField } from 'react-admin';

const AlanlarDuzenle = props => {
    return (
        <Edit id="AlanID" {...props}>
            <SimpleForm rowClick="edit">
                <NumberInput source="AlanID" validate={required()} label="AlanID" />
                <TextInput source="AlanAdi" validate={required()} />
                <FunctionField label="Alan Tipi" render={(record) => {
                    return record["AlanTipi"] == true ? "Mudahale(1)" : "Çıktı(0)";
                }} />
                <NullableBooleanInput style={{ width: "250px" }} validate={required()} source="AlanTipi" label="Alan Tipi Değiştir" trueLabel="Mudahale(1)" falseLabel="Çıktı(0)" />
            </SimpleForm>
        </Edit>
    );
}
export default AlanlarDuzenle;