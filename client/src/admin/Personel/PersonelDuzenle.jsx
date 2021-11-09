import { SimpleForm, SelectInput, TextInput, ReferenceInput } from "ra-ui-materialui";
import { required } from "ra-core";
import CustomEdit from "../CustomEdit";
import { FormDataConsumer } from 'react-admin';

const PersonelDuzenle = props => {
    console.log(props)

    return (
        <CustomEdit title="Personel" {...props}>
            <SimpleForm rowClick="edit">
                <TextInput source="KullaniciAdi" validate={required()} />
                <TextInput source="Email" validate={required()} type="email" />
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

                <FormDataConsumer>
                    {
                        ({ formData, ...rest }) => {
                            console.log(rest);
                            console.log(formData);

                            return <div>
                                <ReferenceInput source="UstKullaniciAdi" reference="personel" label="Ust Kullanici Adi"
                                    allowEmpty={true}>
                                    <SelectInput optionText="KullaniciAdi" disable_value="123123" />
                                </ReferenceInput>

                                {formData.id == formData.UstKullaniciAdi &&
                                    <p style={{ color: "red" }}>Üst Kullanıcı Adı ile Kullanıcı Adı aynı olmamalı!</p>
                                }
                            </div>
                        }
                    }
                </FormDataConsumer>

                <ReferenceInput validate={required()} source="CalistigiBirimKodu" reference="birimler" label="BirimKodu">
                    <SelectInput optionText={(src) => {
                        return (`${src["BirimKodu"]} -  ${src["BirimAdi"]}`);
                    }} />
                </ReferenceInput>

            </SimpleForm>
        </CustomEdit>
    );
}
export default PersonelDuzenle;

/*
    KullaniciAdi, Email, Ad, Soyad, SicilNo, Cep, EvAdresi, IlKodu, IlceKodu, PostaKodu, UstKullaniciAdi, CalistigiBirimKodu
*/