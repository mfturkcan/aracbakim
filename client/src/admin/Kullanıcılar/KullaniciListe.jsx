import { Datagrid, List, TextField } from "ra-ui-materialui";

const KullaniciListe = props => {
    return (
        <List title="Kullanıcılar" {...props}>
            <Datagrid rowClick="edit">
                <TextField source="KullaniciAdi" />
                <TextField source="Şifre" />
                <TextField source="KullaniciRolu" />
            </Datagrid>
        </List>
    );
}
export default KullaniciListe;