import { Create, SimpleForm, TextInput, NumberInput, BooleanInput } from "ra-ui-materialui";

const AlanlarEkle = props => {
    return (
        <Create id="AlanID" {...props}>
            <SimpleForm rowClick="edit">
                <NumberInput source="AlanID" />
                <TextInput source="AlanAdi" />
                <BooleanInput source="AlanTipi" />
            </SimpleForm>
        </Create>
    );
}
export default AlanlarEkle;