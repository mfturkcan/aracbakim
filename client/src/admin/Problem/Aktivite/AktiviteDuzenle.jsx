import { Edit, SimpleForm, TextInput, NumberInput } from "ra-ui-materialui";

const AktiviteDuzenle = props => {
    return (
        <Edit id="AktiviteID" {...props}>
            <SimpleForm>
                <NumberInput source="AktiviteID" label="AktiviteID" />
                <TextInput source="AktiviteTanimi" />
            </SimpleForm>
        </Edit>
    );
}
export default AktiviteDuzenle;