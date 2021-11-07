import { Edit, SimpleForm, TextInput, NumberInput } from "ra-ui-materialui";

const CiktiDuzenle = props => {
    return (
        <Edit id="CiktiID" {...props}>
            <SimpleForm>
                <NumberInput source="AlanID" />
                <NumberInput source="SinifID" />
                <NumberInput source="CiktiID" />
                <TextInput source="CiktiAdi" />
            </SimpleForm>
        </Edit>
    );
}
export default CiktiDuzenle;