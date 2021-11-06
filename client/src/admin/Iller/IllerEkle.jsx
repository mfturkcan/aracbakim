import { Create, SelectInput, SimpleForm, TextInput, NumberInput } from "ra-ui-materialui";
import { required } from "ra-core";

const IllerEkle = props => {
    return (
        <Create id="IlKodu" {...props}>
            <SimpleForm>
                <NumberInput source="IlKodu" validate={required()} />
                <TextInput source="IlAdi" validate={required()} />
            </SimpleForm>
        </Create>
    );
}
export default IllerEkle;