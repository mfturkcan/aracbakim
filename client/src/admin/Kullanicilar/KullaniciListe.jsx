import { Datagrid, List, SelectField, TextField, FunctionField } from "ra-ui-materialui";
import axios from "axios";
import { decryptPassword } from "../../password/password";
import CustomEmptyPage from './../CustomEmptyPage';

const KullaniciListe = props => {
    return (
        <List title="Kullanıcılar" {...props} empty={<CustomEmptyPage Adi="Kullanıcı" />}>
            <Datagrid rowClick="edit">
                <TextField source="KullaniciAdi" />
                <FunctionField label="Şifre" render={src => decryptPassword(src["Şifre"]) ?? src["Şifre"]} />
            </Datagrid>
        </List>
    );
}
export default KullaniciListe;