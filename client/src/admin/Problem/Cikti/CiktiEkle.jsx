import { Create, SimpleForm, TextInput, NumberInput } from "ra-ui-materialui";

const CiktiEkle = props => {
    return (
        <Create id="CiktiID" {...props}>
            <SimpleForm>
                <NumberInput source="AlanID" />
                <NumberInput source="SinifID" />
                <NumberInput source="CiktiID" />
                <TextInput source="CiktiAdi" />
            </SimpleForm>
        </Create>
    );
}
export default CiktiEkle;