import { Edit, SimpleForm, TextInput, NumberInput } from "ra-ui-materialui";
import { required } from 'ra-core';

const BelirtecDuzenle = props => {
    return (
        <Edit id="BelirtecID" {...props}>
            <SimpleForm >
                <NumberInput source="BelirtecID" label="BelirtecID" validate={required()} />
                <TextInput source="BelirtecTanimi" validate={required()} />
            </SimpleForm>
        </Edit>
    );
}
export default BelirtecDuzenle;