import { Create, SimpleForm, TextInput, NumberInput } from "ra-ui-materialui";

const CiktiEkle = props => {
    return (
        <Create id="CiktiID" {...props}>
            <SimpleForm>
                <NumberInput source="AlanID" label="AlanID" />
                <NumberInput source="SinifID" label="SinifID" />
                <NumberInput source="CiktiID" label="CiktiID" />
                <TextInput source="CiktiAdi" />
            </SimpleForm>
        </Create>
    );
}
export default CiktiEkle;