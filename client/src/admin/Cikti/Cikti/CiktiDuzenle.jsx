import { Edit, SimpleForm, TextInput, NumberInput } from "ra-ui-materialui";

const CiktiDuzenle = props => {
    return (
        <Edit id="CiktiID" {...props}>
            <SimpleForm>
                <NumberInput source="AlanID" label="AlanID" />
                <NumberInput source="SinifID" label="SinifID" />
                <NumberInput source="CiktiID" label="CiktiID" />
                <TextInput source="CiktiAdi" />
            </SimpleForm>
        </Edit>
    );
}
export default CiktiDuzenle;