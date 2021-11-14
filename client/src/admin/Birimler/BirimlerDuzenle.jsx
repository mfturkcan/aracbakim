import { SimpleForm, Edit, SelectInput, TextInput, ReferenceInput, NumberInput } from "ra-ui-materialui";
import { FormDataConsumer } from "ra-core";
import { required } from "ra-core";

const BirimlerDüzenle = props => {
    return (
        <Edit {...props} >
            <SimpleForm rowClick="edit" variant="outlined">
                <NumberInput source="BirimKodu" validate={required()} min={1} />
                <TextInput source="BirimAdi" validate={required()} />

                <FormDataConsumer>
                    {
                        ({ formData, ...rest }) => {
                            return <div>
                                <ReferenceInput source="UstBirimKodu" reference="birimler" label="Üst Birim Adı" allowEmpty={true}>
                                    <SelectInput optionText="BirimAdi" />
                                </ReferenceInput>

                                {formData.id == formData.UstBirimKodu &&
                                    <p style={{ color: "red" }}>Üst Birim Kodu ile Kullanıcı Adı aynı olmamalı!</p>
                                }
                            </div>
                        }
                    }
                </FormDataConsumer>

                <TextInput source="BulunduguAdres" validate={required()} />
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

                <ReferenceInput validate={required()} source="BirimMudurKullaniciAdi" reference="personel" label="Mudur Kullanici Adi">
                    <SelectInput optionText="KullaniciAdi" />
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    );
}
export default BirimlerDüzenle;

/*
    Birimler (BirimKodu, BirimAdi, UstBirimKodu, BulunduguAdres, IlKodu, IlceKodu, PostaKodu, BirimMudurKullaniciAdi)
*/