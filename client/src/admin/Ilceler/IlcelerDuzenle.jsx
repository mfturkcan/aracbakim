import { required } from "ra-core";
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput } from "ra-ui-materialui";

const IlcelerDuzenle = props => {
    return (
        <Edit id="IlceKodu" {...props}>
            <SimpleForm>
                <TextInput source="IlceKodu" validate={required()} />
                <TextInput source="IlceAdi" validate={required()} />
                <ReferenceInput validate={required()} source="IlKodu" reference="iller" label="IlKodu">
                    <SelectInput optionText={(source) => {
                        return (`${source["IlAdi"]} - ${source["IlKodu"]}`);
                    }} />
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    );
}
export default IlcelerDuzenle;