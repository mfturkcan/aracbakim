import { Create, SimpleForm, SelectInput, TextInput, ReferenceInput } from "ra-ui-materialui";
import { required } from "ra-core";

const PersonelEkle = props => {
    return (
        <div>
            <Create title="Personel" {...props}>
                <SimpleForm rowClick="edit">
                    <TextInput source="KullaniciAdi" validate={required()} />
                    <TextInput source="Email" validate={required()} />
                    <TextInput source="Ad" validate={required()} />
                    <TextInput source="Soyad" validate={required()} />
                    <TextInput source="SicilNo" validate={required()} />
                    <TextInput source="Cep" validate={required()} />
                    <TextInput source="EvAdresi" validate={required()} />

                    <ReferenceInput source="IlKodu" reference="iller" label="IlKodu" validate={required()}>
                        <SelectInput optionText={(src) => {
                            return (`${src["IlAdi"]} -  ${src["IlKodu"]}`);
                        }} />
                    </ReferenceInput>
                    <ReferenceInput source="IlceKodu" reference="ilceler" label="IlceKodu" validate={required()}>
                        <SelectInput optionText={(src) => {
                            return (`${src["IlceAdi"]} -  ${src["IlceKodu"]}`);
                        }} />
                    </ReferenceInput>

                    <TextInput source="PostaKodu" validate={required()} />

                    <ReferenceInput source="UstKullaniciAdi" reference="personel" label="Ust Kullanici Adi">
                        <SelectInput optionText="KullaniciAdi" />
                    </ReferenceInput>

                    <ReferenceInput validate={required()} source="CalistigiBirimKodu" reference="birimler" label="BirimKodu">
                        <SelectInput optionText={(src) => {
                            return (`${src["BirimKodu"]} -  ${src["BirimAdi"]}`);
                        }} />
                    </ReferenceInput>
                </SimpleForm>

            </Create>
            <div style={{ color: "red" }}>Personel eklemenden önce birim oluşturmanız gerekebilir!</div>
        </div>
    );
}
export default PersonelEkle;