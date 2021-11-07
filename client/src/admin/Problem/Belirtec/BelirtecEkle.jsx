import { Edit, SimpleForm, TextInput, NumberInput } from "ra-ui-materialui";

const BelirtecEkle = props => {
    return (
        <Create id="BelirtecID" {...props}>
            <SimpleForm rowClick="edit">
                <NumberInput source="BelirtecID" />
                <TextInput source="BelirtecTanimi" />
            </SimpleForm>
        </Create>
    );
}
export default BelirtecEkle;