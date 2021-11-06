import { Box } from "@material-ui/core";
import { SimpleForm, Edit, SelectInput, TextInput, ReferenceInput } from "ra-ui-materialui";
import { FormDataConsumer } from "ra-core";

const BirimlerDüzenle = props => {
    return (
        <Edit {...props} >
            <SimpleForm rowClick="edit" variant="outlined">
                <TextInput source="BirimKodu" />
                <TextInput source="BirimAdi" />

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
        </Edit>
    );
}
export default BirimlerDüzenle;

/*
    Birimler (BirimKodu, BirimAdi, UstBirimKodu, BulunduguAdres, IlKodu, IlceKodu, PostaKodu, BirimMudurKullaniciAdi)
*/