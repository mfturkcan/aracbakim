import { required } from "ra-core";
import { FunctionField, PasswordInput, SelectInput, SimpleForm, TextInput } from "ra-ui-materialui";
import CustomEdit from "../CustomEdit";
import axios from "axios";
import { decryptPassword } from "../../password/password";
import { useEffect } from "react";

const KullaniciDuzenle = props => {

    return (
        <CustomEdit id="KullaniciAdi" {...props}>
            <SimpleForm>
                <TextInput source="KullaniciAdi" validate={required()} />
                <PasswordInput name="YeniŞifre" source="YeniŞifre" />
                <TextInput source="Şifre" disabled />
                <PasswordInput source="Encrypted Şifre" disabled />
            </SimpleForm>
        </CustomEdit>
    );
}
export default KullaniciDuzenle;