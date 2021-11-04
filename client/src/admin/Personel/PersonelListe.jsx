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

                <ReferenceField source="IlKodu" reference="iller" label="Il Adı">
                    <TextField source="IlAdi" />
                </ReferenceField>
                <ReferenceField source="IlceKodu" reference="ilceler" label="Ilce Adı">
                    <TextField source="IlceAdi" />
                </ReferenceField>

                <TextField source="PostaKodu" />

                <ReferenceField source="UstKullaniciAdi" reference="personel" label="Ust Kullanici Adi">
                    <TextField source="KullaniciAdi" />
                </ReferenceField>

                <ReferenceField source="CalistigiBirimKodu" reference="birimler" label="Birim Adı">
                    <TextField source="BirimAdi" />
                </ReferenceField>

            </Datagrid>
        </List>
    );
}
export default PersonelListe;

/*
    KullaniciAdi, Email, Ad, Soyad, SicilNo, Cep, EvAdresi, IlKodu, IlceKodu, PostaKodu, UstKullaniciAdi, CalistigiBirimKodu
*/