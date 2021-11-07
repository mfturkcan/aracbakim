import { Create, SimpleForm, TextInput, NumberInput } from "ra-ui-materialui";

const MudahaleDetayEkle = props => {
    return (
        <Create id="MudahaleID" {...props}>
            <SimpleForm rowClick="edit">
                <NumberInput source="AlanID" />
                <NumberInput source="SinifID" />
                <NumberInput source="MudahaleID" />
                <NumberInput source="AktiviteID" />
                <TextInput source="Sira" />
            </SimpleForm>
        </Create>
    );
}
export default MudahaleDetayEkle;