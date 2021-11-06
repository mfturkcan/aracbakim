import { Datagrid, List, SelectField, TextField, FunctionField } from "ra-ui-materialui";
import axios from "axios";
import { decryptPassword } from "../../password/password";

const KullaniciListe = props => {
    return (
        <List title="Kullanıcılar" {...props}>
            <Datagrid rowClick="edit">
                <TextField source="KullaniciAdi" />
                <FunctionField label="Şifre" render={src => decryptPassword(src["Şifre"]) ?? src["Şifre"]} />
                <SelectField source="KullaniciRolu" optionText="name" choices={[{ id: 0, name: "Yönetici" }, { id: 1, name: "Birim Müdürü" }]} />
            </Datagrid>
        </List>
    );
}
export default KullaniciListe;