import { required } from "ra-core";
import { Create, SelectInput, TabbedForm, TextInput, FormTab, ReferenceInput, SimpleForm } from "ra-ui-materialui";
import { useEffect, useState } from "react";
import { useShowController, SimpleShowLayout, FormDataConsumer, useFormContext } from "react-admin";
import { Select, MenuItem } from '@mui/material';
import { FormControl, FormHelperText, FormLabel, InputLabel } from "@material-ui/core";
import { useFormState } from 'react-final-form/';

const KullaniciEkle = props => {

    const [rol, setRol] = useState("mudur");

    let values;

    useEffect(() => { console.log(values); }, [values]);

    return (
        <Create id="KullaniciAdi" {...props} >
            <TabbedForm >
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

                        <FormDataConsumer>
                            {
                                ({ formData, ...rest }) => {
                                    console.log(formData)
                                    return <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <label htmlFor="BirimMudurKullaniciAdi" style={{ paddingLeft: "6px" }} >Birim Mudur Kullanici Adi: </label>
                                        <select required={true} variant="filled" style={{ width: "250px" }} name="BirimMudurKullaniciAdi" id="BirimMudurKullaniciAdi" defaultValue={formData.KullaniciAdi ?? ""}>
                                            <option value={formData.KullaniciAdi}>{formData.KullaniciAdi}</option>
                                        </select>
                                    </div>
                                }
                            }
                        </FormDataConsumer>

                        <FormDataConsumer>
                            {
                                ({ formData, ...rest }) => {
                                    console.log(formData)
                                    return <SelectInput source="BirimMudurKullaniciAdi" choices={[]} />
                                }
                            }
                        </FormDataConsumer>

                        <input name="BirimMudurKullaniciAdi" placeholder="Birim mudur" />

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

                        <TextInput source="PostaKodu" validate={required()} />

                        <ReferenceInput source="UstKullaniciAdi" reference="personel" label="Ust Kullanici Adi">
                            <SelectInput optionText="KullaniciAdi" />
                        </ReferenceInput>

                        <FormDataConsumer>
                            {
                                ({ formData, ...rest }) => {
                                    console.log(formData.KullaniciAdi)
                                    return <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <label>Calistigi Birim Kodu: </label>
                                        <Select key={formData.CalistigiBirimKodu} required={true} variant="filled" style={{ width: "250px" }} name="CalistigiBirimKodu" defaultValue={formData.BirimKodu ?? "BirimKodu"}>
                                            <MenuItem value={formData.BirimKodu}>{formData.BirimKodu}</MenuItem>
                                        </Select>
                                    </div>
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
