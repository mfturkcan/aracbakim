import { SimpleForm, Create, SelectInput, TextInput, ReferenceInput } from "ra-ui-materialui";

const BirimlerEkle = props => {
    return (
        <Create {...props}>
            <SimpleForm rowClick="edit">
                <TextInput source="BirimKodu" />
                <TextInput source="BirimAdi" />

                <ReferenceInput source="UstBirimKodu" reference="birimler" label="Üst Birim Adı">
                    <SelectInput optionText="BirimAdi" />
                </ReferenceInput>
                <TextInput source="BulunduguAdres" />

                <ReferenceInput source="IlKodu" reference="iller" label="Il Adı">
                    <SelectInput optionText="IlAdi" />
                </ReferenceInput>

                <ReferenceInput source="IlceKodu" reference="ilceler" label="Ilce Adı">
                    <SelectInput optionText="IlceAdi" />
                </ReferenceInput>

                <TextInput source="PostaKodu" />

                <ReferenceInput source="BirimMudurKullaniciAdi" reference="personel" label="Mudur Kullanici Adi">
                    <SelectInput optionText="KullaniciAdi" />
                </ReferenceInput>

            </SimpleForm>
        </Create>
    );
}
export default BirimlerEkle;

/*
    Birimler (BirimKodu, BirimAdi, UstBirimKodu, BulunduguAdres, IlKodu, IlceKodu, PostaKodu, BirimMudurKullaniciAdi)
*/