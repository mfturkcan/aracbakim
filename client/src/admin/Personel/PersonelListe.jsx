import { Datagrid, List, SelectField, TextField, ReferenceField } from "ra-ui-materialui";
import CustomEmptyPage from "../CustomEmptyPage";

const PersonelListe = props => {
    return (
        <List title="Personel" {...props} empty={<CustomEmptyPage Adi="Personel" />}>
            <Datagrid rowClick="edit">
                <TextField source="KullaniciAdi" />
                <TextField source="Email" />
                <TextField source="Ad" />
                <TextField source="Soyad" />
                <TextField source="SicilNo" />
                <TextField source="Cep" />
                <TextField source="EvAdresi" />

                <TextField source="IlKodu" />
                <TextField source="IlceKodu" />

                <TextField source="PostaKodu" />

                <TextField source="UstKullaniciAdi" />

                <TextField source="CalistigiBirimKodu" />

            </Datagrid>
        </List>
    );
}
export default PersonelListe;

/*
    KullaniciAdi, Email, Ad, Soyad, SicilNo, Cep, EvAdresi, IlKodu, IlceKodu, PostaKodu, UstKullaniciAdi, CalistigiBirimKodu
*/