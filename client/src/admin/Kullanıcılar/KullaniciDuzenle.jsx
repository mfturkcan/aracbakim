import { required } from "ra-core";
import { Edit, SelectField, SelectInput, SimpleForm, TextInput } from "ra-ui-materialui";

const KullaniciDuzenle = props => {
    return (
        <Edit id="KullaniciAdi" {...props}>
            <SimpleForm>
                <TextInput source="KullaniciAdi" validate={required()} />
                <TextInput source="Şifre" disabled />
                <SelectInput validate={required()} source="KullaniciRolu" optionText="name" choices={[{ id: 0, name: "Yönetici" }, { id: 1, name: "Birim Müdürü" }]} />
            </SimpleForm>
        </Edit>
    );
}
export default KullaniciDuzenle;