import { Edit, SimpleForm, NumberInput } from "ra-ui-materialui";

const CiktiDetayDuzenle = props => {
    return (
        <Edit id="CiktiID" {...props}>
            <SimpleForm rowClick="edit">
                <NumberInput source="AlanID" />
                <NumberInput source="SinifID" />
                <NumberInput source="CiktiID" />
                <NumberInput source="BelirtecID" />
                <NumberInput source="Sira" />
            </SimpleForm>
        </Edit>
    );
}
export default CiktiDetayDuzenle;