import { Edit, SimpleForm, SelectInput, TextInput, ReferenceInput } from "ra-ui-materialui";
import { required } from "ra-core";

const PersonelDuzenle = props => {
    return (
        <Edit title="Personel" {...props}>
            <SimpleForm rowClick="edit">
                <TextInput source="KullaniciAdi" validate={required()} />
                <TextInput source="Email" validate={required()} type="email" />
                <TextInput source="Ad" validate={required()} />
                <TextInput source="Soyad" validate={required()} />
                <TextInput source="SicilNo" validate={required()} />
                <TextInput source="Cep" validate={required()} />
                <TextInput source="EvAdresi" validate={required()} />

                <ReferenceInput source="IlKodu" reference="iller" label="Il Adı" validate={required()}>
                    <SelectInput optionText="IlAdi" />
                </ReferenceInput>
                <ReferenceInput source="IlceKodu" reference="ilceler" label="Ilce Adı" validate={required()}>
                    <SelectInput optionText="IlceAdi" />
                </ReferenceInput>

                <TextInput source="PostaKodu" validate={required()} />

                <ReferenceInput source="UstKullaniciAdi" reference="personel" label="Ust Kullanici Adi"
                >
                    <SelectInput optionText="KullaniciAdi" />
                </ReferenceInput>

                <ReferenceInput source="CalistigiBirimKodu" reference="birimler" label="Birim Adı">
                    <SelectInput optionText="BirimAdi" />
                </ReferenceInput>

            </SimpleForm>
        </Edit>
    );
}
export default PersonelDuzenle;

/*
    KullaniciAdi, Email, Ad, Soyad, SicilNo, Cep, EvAdresi, IlKodu, IlceKodu, PostaKodu, UstKullaniciAdi, CalistigiBirimKodu
*/