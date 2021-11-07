import { Edit, SimpleForm, TextInput, NumberInput } from "ra-ui-materialui";

const MudahaleDetayDuzenle = props => {
    return (
        <Edit id="MudahaleID" {...props}>
            <SimpleForm rowClick="edit">
                <NumberInput source="AlanID" />
                <NumberInput source="SinifID" />
                <NumberInput source="MudahaleID" />
                <NumberInput source="AktiviteID" />
                <TextInput source="Sira" />
            </SimpleForm>
        </Edit>
    );
}
export default MudahaleDetayDuzenle;