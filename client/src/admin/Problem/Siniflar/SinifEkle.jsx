import { Create, SimpleForm, TextInput, NumberInput, BooleanInput } from "ra-ui-materialui";

const SinifEkle = props => {
    return (
        <Create id="SinifID" {...props}>
            <SimpleForm rowClick="edit">
                <NumberInput source="SinifID" />
                <TextInput source="SinifAdi" />
                <BooleanInput source="AlanTipi" />
            </SimpleForm>
        </Create>
    );
}
export default SinifEkle;