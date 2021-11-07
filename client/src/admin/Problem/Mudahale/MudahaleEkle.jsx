import { Create, SimpleForm, TextInput, NumberInput } from "ra-ui-materialui";

const MudahaleEkle = props => {
    return (
        <Create id="MudahaleID" {...props}>
            <SimpleForm rowClick="edit">
                <NumberInput source="AlanID" />
                <NumberInput source="SinifID" />
                <NumberInput source="MudahaleID" />
                <TextInput source="MudahaleAdi" />
            </SimpleForm>
        </Create>
    );
}
export default MudahaleEkle;