import { required } from "ra-core";
import { Create, SelectInput, TabbedForm, TextInput, FormTab, ReferenceInput, SimpleForm, NumberInput } from "ra-ui-materialui";
import { useEffect, useState } from "react";
import { useShowController, SimpleShowLayout, FormDataConsumer, useFormContext } from "react-admin";
import { Select, MenuItem } from '@mui/material';
import { FormControl, FormHelperText, FormLabel, InputLabel } from "@material-ui/core";
import { useFormState } from 'react-final-form/';

const KullaniciEkle = ({ translate, ...props }) => {

    const [rol, setRol] = useState("mudur");

    return (
        <Create id="KullaniciAdi" {...props} >
            <TabbedForm sanitizeEmptyValues={false}>
                <FormTab label="Kullanıcı">
                    <TextInput source="KullaniciAdi" validate={required()} />
                    <TextInput source="Şifre" validate={required()} />

                    <FormControl>
                        <InputLabel style={{ paddingLeft: "6px" }} >Kullanıcı Rolü:</InputLabel>
                        <Select required={true} variant="filled" style={{ width: "250px" }} name="kullanici_rol" defaultValue="mudur" id="kullanici_rol" onChange={(event) => { setRol(event.target.value); }}>
                            <MenuItem value="yonetici">Yönetici</MenuItem>
                            <MenuItem value="mudur">Birim Müdürü</MenuItem>
                        </Select>
                    </FormControl>
                </FormTab>

                {
                    rol == "mudur" && <FormTab label="Birim">
                        <NumberInput source="BirimKodu" validate={required()} />
                        <TextInput source="BirimAdi" validate={required()} />

                        <ReferenceInput source="UstBirimKodu" reference="birimler" label="Üst Birim Adı">
                            <SelectInput optionText="BirimAdi" />
                        </ReferenceInput>
                        <TextInput source="BulunduguAdres" validate={required()} />

                        <ReferenceInput validate={required()} source="IlKodu" reference="iller" label="Il Adı">
                            <SelectInput optionText="IlAdi" />
                        </ReferenceInput>

                        <ReferenceInput validate={required()} source="IlceKodu" reference="ilceler" label="Ilce Adı">
                            <SelectInput optionText="IlceAdi" />
                        </ReferenceInput>

                        <TextInput source="PostaKodu" validate={required()} />

                        <FormDataConsumer>
                            {
                                ({ formData, ...rest }) => {
                                    return <SelectInput validate={required()} variant="filled" style={{ width: "250px" }} source="BirimMudurKullaniciAdi" choices={[{ id: formData.KullaniciAdi ?? "0", name: formData.KullaniciAdi ?? "" }]} />
                                }
                            }
                        </FormDataConsumer>

                    </FormTab>
                }

                {
                    rol == "mudur" && <FormTab label="Personel" >
                        <TextInput source="KullaniciAdi" validate={required()} />
                        <TextInput source="Email" validate={required()} />
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

                        <NumberInput source="PostaKodu" validate={required()} />

                        <ReferenceInput source="UstKullaniciAdi" reference="personel" label="Ust Kullanici Adi">
                            <SelectInput optionText="KullaniciAdi" />
                        </ReferenceInput>

                        <FormDataConsumer>
                            {
                                ({ formData, ...rest }) => {
                                    return <SelectInput validate={required()} label="Calistigi Birim Kodu" source="CalistigiBirimKodu" choices={[{ id: formData.BirimKodu, name: formData.BirimKodu == undefined ? "" : formData.BirimKodu.toString() }]} style={{ width: "250px" }} />

                                }
                            }
                        </FormDataConsumer>
                    </FormTab>
                }
            </TabbedForm>
        </Create>
    );
}
export default KullaniciEkle;
