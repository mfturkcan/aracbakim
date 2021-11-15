import { Create, SimpleForm, TextInput, NumberInput } from "ra-ui-materialui";

const AktiviteEkle = props => {
    return (
        <Create id="AktiviteID" {...props}>
            <SimpleForm>
                <NumberInput source="AktiviteID" label="AktiviteID" />
                <TextInput source="AktiviteTanimi" />
            </SimpleForm>
        </Create>
    );
}
export default AktiviteEkle;