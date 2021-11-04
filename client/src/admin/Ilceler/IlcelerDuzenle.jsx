import { required } from "ra-core";
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput } from "ra-ui-materialui";

const IlcelerDuzenle = props => {
    return (
        <Edit id="IlceKodu" {...props}>
            <SimpleForm>
                <TextInput source="IlceKodu" validate={required()} />
                <TextInput source="IlceAdi" validate={required()} />
                <ReferenceInput validate={required()} source="IlKodu" reference="iller" label="Bağlı olduğu Il">
                    <SelectInput optionText="IlAdi" />
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    );
}
export default IlcelerDuzenle;