import { SimpleForm, Create, SelectInput, TextInput, ReferenceInput } from "ra-ui-materialui";
import { required } from "ra-core";


// Kullanılmayacak
const BirimlerEkle = props => {
    return (
        <div>
            Birimler ancak BirimMüdür ile birlikte oluşturulabilir.
        </div>
    );
}
export default BirimlerEkle;

{/* <Create {...props}>
    <SimpleForm rowClick="edit">
        <TextInput source="BirimKodu" validate={required()} />
        <TextInput source="BirimAdi" validate={required()} />

        <ReferenceInput source="UstBirimKodu" reference="birimler" label="Üst Birim Adı">
            <SelectInput optionText="BirimAdi" />
        </ReferenceInput>
        <TextInput source="BulunduguAdres" validate={required()} />

        <ReferenceInput source="IlKodu" reference="iller" label="Il Adı" validate={required()}>
            <SelectInput optionText="IlAdi" />
        </ReferenceInput>

        <ReferenceInput source="IlceKodu" reference="ilceler" label="Ilce Adı" validate={required()}>
            <SelectInput optionText="IlceAdi" />
        </ReferenceInput>

        <TextInput source="PostaKodu" validate={required()} />

        <ReferenceInput source="BirimMudurKullaniciAdi" reference="personel" label="Mudur Kullanici Adi" validate={required()}>
            <SelectInput optionText="KullaniciAdi" />
        </ReferenceInput>

    </SimpleForm>
</Create> */}