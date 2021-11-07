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
                <TextInput name="YeniŞifre" source="YeniŞifre" />
                <FunctionField label="Şifre çözümlenmiş" render={src => decryptPassword(src["Şifre"])} />
                <PasswordInput source="Şifre" disabled />
            </SimpleForm>
        </CustomEdit>
    );
}
export default KullaniciDuzenle;