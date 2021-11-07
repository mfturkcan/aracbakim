import { Edit, SimpleForm, TextInput, NumberInput } from "ra-ui-materialui";

const BelirtecDuzenle = props => {
    return (
        <Edit id="BelirtecID" {...props}>
            <SimpleForm >
                <NumberInput source="BelirtecID" />
                <TextInput source="BelirtecTanimi" />
            </SimpleForm>
        </Edit>
    );
}
export default BelirtecDuzenle;