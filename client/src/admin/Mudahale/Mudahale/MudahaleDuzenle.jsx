import { Edit, SimpleForm, TextInput, NumberInput, SelectInput, ReferenceInput } from "ra-ui-materialui";
import { required } from 'ra-core';

const MudahaleDuzenle = props => {
    return (
        <Edit id="MudahaleID" {...props}>
            <SimpleForm rowClick="edit">
                <NumberInput source="MudahaleID" label="MudahaleID" validate={required()} />
                <ReferenceInput validate={required()} source="AlanID" reference="alanlar" label="AlanID">
                    <SelectInput optionText="AlanID" />
                </ReferenceInput>
                <ReferenceInput validate={required()} source="SinifID" reference="siniflar" label="SinifID">
                    <SelectInput optionText="SinifID" />
                </ReferenceInput>

                <TextInput source="MudahaleAdi" validate={required()} />
            </SimpleForm>
        </Edit>
    );
}
export default MudahaleDuzenle;