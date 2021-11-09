import { Create, SimpleForm, TextInput, NumberInput } from "ra-ui-materialui";
import { required } from 'ra-core';

const BelirtecEkle = props => {
    return (
        <Create id="BelirtecID" {...props}>
            <SimpleForm rowClick="edit">
                <NumberInput source="BelirtecID" label="BelirtecID" validate={required()} />
                <TextInput source="BelirtecTanimi" validate={required()} />
            </SimpleForm>
        </Create>
    );
}
export default BelirtecEkle;