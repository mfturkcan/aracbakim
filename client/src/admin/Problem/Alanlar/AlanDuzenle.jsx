import { Edit, SimpleForm, TextInput, NumberInput, BooleanInput } from "ra-ui-materialui";

const AlanlarDuzenle = props => {
    return (
        <Edit id="AlanID" {...props}>
            <SimpleForm rowClick="edit">
                <NumberInput source="AlanID" />
                <TextInput source="AlanAdi" />
                <BooleanInput source="AlanTipi" />
            </SimpleForm>
        </Edit>
    );
}
export default AlanlarDuzenle;