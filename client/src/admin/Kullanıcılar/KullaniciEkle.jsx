import { required } from "ra-core";
import { Create, SelectInput, SimpleForm, TextInput } from "ra-ui-materialui";

const KullaniciEkle = props => {
    return (
        <Create id="KullaniciAdi" {...props}>
            <SimpleForm>
                <TextInput source="KullaniciAdi" validate={required()} />
                <TextInput source="Şifre" validate={required()} />
                <SelectInput validate={required()} source="KullaniciRolu" optionText="name" choices={[{ id: 0, name: "Yönetici" }, { id: 1, name: "Birim Müdürü" }]} />
            </SimpleForm>
        </Create>
    );
}
export default KullaniciEkle;