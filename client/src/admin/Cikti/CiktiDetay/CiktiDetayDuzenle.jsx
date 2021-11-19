import { Edit, SimpleForm, NumberInput } from "ra-ui-materialui";

const CiktiDetayDuzenle = props => {
    return (
        <Edit id="CiktiID" {...props}>
            <SimpleForm rowClick="edit">
                <NumberInput source="AlanID" label="AlanID" />
                <NumberInput source="SinifID" label="SinifID" />
                <NumberInput source="CiktiID" label="CiktiID" />
                <NumberInput source="BelirtecID" label="BelirtecID" />
                <NumberInput source="Sira" />
            </SimpleForm>
        </Edit>
    );
}
export default CiktiDetayDuzenle;