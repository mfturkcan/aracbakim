import { Create, SimpleForm, NumberInput } from "ra-ui-materialui";

const CiktiDetayEkle = props => {
    return (
        <Create id="CiktiID" {...props}>
            <SimpleForm rowClick="edit">
                <NumberInput source="AlanID" />
                <NumberInput source="SinifID" />
                <NumberInput source="CiktiID" />
                <NumberInput source="BelirtecID" />
                <NumberInput source="Sira" />
            </SimpleForm>
        </Create>
    );
}
export default CiktiDetayEkle;