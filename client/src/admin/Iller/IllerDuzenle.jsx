import { Edit, SimpleForm, TextInput } from "ra-ui-materialui";
import { required } from "ra-core";

const IllerDuzenle = props => {
    return (
        <Edit id="IlKodu" {...props}>
            <SimpleForm>
                <TextInput source="IlKodu" validate={required()} />
                <TextInput source="IlAdi" validate={required()} />
            </SimpleForm>
        </Edit>
    );
}
export default IllerDuzenle;