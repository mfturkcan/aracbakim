import { Create, SelectInput, SimpleForm, TextInput } from "ra-ui-materialui";

const KullaniciEkle = props => {
    return (
        <Create id="KullaniciAdi" {...props}>
            <SimpleForm>
                <TextInput source="KullaniciAdi" />
                <TextInput source="Şifre" />
                <SelectInput source="KullaniciRolu" optionText="name" choices={[{ id: 0, name: "Yönetici" }, { id: 2, name: "Personel" }, { id: 1, name: "Birim Müdürü" }]} />
            </SimpleForm>
        </Create>
    );
}
export default KullaniciEkle;