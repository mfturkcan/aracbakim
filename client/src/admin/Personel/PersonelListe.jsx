import { Datagrid, List, SelectField, TextField, ReferenceField } from "ra-ui-materialui";

const PersonelListe = props => {
    return (
        <List title="Personel" {...props}>
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