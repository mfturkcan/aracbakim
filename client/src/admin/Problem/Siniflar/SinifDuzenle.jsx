import { Edit, SimpleForm, TextInput, NumberInput, BooleanInput } from "ra-ui-materialui";

const SinifDuzenle = props => {
    return (
        <Edit id="SinifID" {...props}>
            <SimpleForm rowClick="edit">
                <NumberInput source="SinifID" />
                <TextInput source="SinifAdi" />
                <BooleanInput source="AlanTipi" />
            </SimpleForm>
        </Edit>
    );
}
export default SinifDuzenle;