import { Datagrid, List, SelectField, TextField } from "ra-ui-materialui";

const KullaniciListe = props => {
    return (
        <List title="Kullanıcılar" {...props}>
            <Datagrid rowClick="edit">
                <TextField source="KullaniciAdi" />
                <TextField source="Şifre" />
                <SelectField source="KullaniciRolu" optionText="name" choices={[{ id: 0, name: "Yönetici" }, { id: 1, name: "Birim Müdürü" }]} />
            </Datagrid>
        </List>
    );
}
export default KullaniciListe;