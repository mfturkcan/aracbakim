import { required } from "ra-core";
import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput } from "ra-ui-materialui";

const IlcelerEkle = props => {
    return (
        <Create id="IlceKodu" {...props}>
            <SimpleForm>
                <TextInput source="IlceKodu" validate={required()} />
                <TextInput source="IlceAdi" validate={required()} />
                <ReferenceInput validate={required()} source="IlKodu" reference="iller" label="Bağlı olduğu Il">
                    <SelectInput optionText="IlAdi" />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    );
}
export default IlcelerEkle;