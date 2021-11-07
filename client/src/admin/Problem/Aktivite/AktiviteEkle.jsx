import { Create, SimpleForm, TextInput, NumberInput } from "ra-ui-materialui";

const AktiviteDuzenle = props => {
    return (
        <Create id="AktiviteID" {...props}>
            <SimpleForm>
                <NumberInput source="AktiviteID" />
                <TextInput source="AktiviteTanimi" />
            </SimpleForm>
        </Create>
    );
}
export default AktiviteDuzenle;