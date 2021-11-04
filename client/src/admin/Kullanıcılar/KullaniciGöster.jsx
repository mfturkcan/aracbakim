import { Show, SimpleShowLayout, TextField, SelectField } from 'react-admin';
import { DeleteButton } from 'ra-ui-materialui';

const KullaniciShow = (props) => (
    <Show title="Kullanıcılar" {...props}>
        <SimpleShowLayout>
            <TextField source="KullaniciAdi" />
            <TextField source="Şifre" />
            <SelectField source="KullaniciRolu" optionText="name" choices={[{ id: 0, name: "Yönetici" }, { id: 1, name: "Birim Müdürü" }]} />
            <DeleteButton />
        </SimpleShowLayout>
    </Show>
);

export default KullaniciShow;

