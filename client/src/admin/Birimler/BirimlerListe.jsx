import { Datagrid, List, SelectField, TextField, ReferenceField } from "ra-ui-materialui";

const BirimlerListe = props => {
    return (
        <List title="Birimler" {...props}>
            <Datagrid rowClick="edit">
                <TextField source="BirimKodu" />
                <TextField source="BirimAdi" />

                <ReferenceField source="UstBirimKodu" reference="birimler" label="Üst Birim Adı">
                    <TextField source="BirimAdi" />
                </ReferenceField>
                <TextField source="BulunduguAdres" />

                <ReferenceField source="IlKodu" reference="iller" label="Il Adı">
                    <TextField source="IlAdi" />
                </ReferenceField>

                <ReferenceField source="IlceKodu" reference="ilceler" label="Ilce Adı">
                    <TextField source="IlceAdi" />
                </ReferenceField>

                <TextField source="PostaKodu" />

                <ReferenceField source="BirimMudurKullaniciAdi" reference="personel" label="Mudur Kullanici Adi">
                    <TextField source="KullaniciAdi" />
                </ReferenceField>

            </Datagrid>
        </List>
    );
}
export default BirimlerListe;

/*
    Birimler (BirimKodu, BirimAdi, UstBirimKodu, BulunduguAdres, IlKodu, IlceKodu, PostaKodu, BirimMudurKullaniciAdi)
*/