import { Edit, SimpleForm, TextInput, NumberInput } from "ra-ui-materialui";

const MudahaleDuzenle = props => {
    return (
        <Edit id="MudahaleID" {...props}>
            <SimpleForm rowClick="edit">
                <NumberInput source="AlanID" />
                <NumberInput source="SinifID" />
                <NumberInput source="MudahaleID" />
                <TextInput source="MudahaleAdi" />
            </SimpleForm>
        </Edit>
    );
}
export default MudahaleDuzenle;