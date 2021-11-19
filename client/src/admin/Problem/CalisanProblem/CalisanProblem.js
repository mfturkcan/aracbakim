import {
    Create,
    Edit,
    SimpleForm,
    List,
    Datagrid,
    ReferenceInput, SelectInput, NumberField, DateField, NumberInput, DateInput,TextField, TextInput
} from "ra-ui-materialui";
import { required } from "ra-core";
import CustomEmptyPage from "../../CustomEmptyPage";


export const CalisanProblemListe = props => {

    return (
        <List id="BelirtecID" {...props} empty={<CustomEmptyPage Adi="Problem Çıktı Degerlendirme" />}>
            <Datagrid rowClick="edit">
                <NumberField source="ProblemID" label="ProblemID" />
                <TextField source="KullaniciAdi" label="KullaniciAdi" />
                <NumberField source="AlanID" label="AlanID" />
                <NumberField source="SinifID" label="SinifID"/>
                <NumberField source="MudahaleID" label="MudahaleID"/>
                <NumberField source="AktiviteID" label="AktiviteID"/>
                <TextField source="AktiviteAciklama" label="AktiviteAciklama" />
                <DateField source="Tarihi" label="Tarihi"/>
            </Datagrid>
        </List>
    );
}

export const CalisanProblemEkle = props => {
    return (
        <Create id="BelirtecID" {...props}>
            <SimpleForm>
                <ReferenceInput validate={required()} source="ProblemID" reference="problem" label="ProblemID">
                    <SelectInput optionText="ProblemTipiID" />
                </ReferenceInput>

                <ReferenceInput validate={required()} source="KullaniciAdi" reference="personel" label="KullaniciAdi">
                    <SelectInput optionText="KullaniciAdi" />
                </ReferenceInput>
                <ReferenceInput validate={required()} source="AlanID" reference="alanlar" label="AlanID">
                    <SelectInput optionText="AlanID" />
                </ReferenceInput>

                <ReferenceInput validate={required()} source="SinifID" reference="siniflar" label="SinifID">
                    <SelectInput optionText="SinifID" />
                </ReferenceInput>

                <ReferenceInput validate={required()} source="MudahaleID" reference="mudahale" label="MudahaleID">
                    <SelectInput optionText="MudahaleID" />
                </ReferenceInput>

                <ReferenceInput validate={required()} source="AktiviteID" reference="aktiviteler" label="AktiviteID">
                    <SelectInput optionText="AktiviteID" />
                </ReferenceInput>

                <TextInput source="AktiviteAciklama" label="AktiviteAciklama" validate={required()}/>

                <DateInput source="Tarihi" validate={required()}/>
            </SimpleForm>
        </Create>
    );
}

export const CalisanProblemDuzenle = props => {
    return (
        <Edit id="BelirtecID" {...props}>
            <SimpleForm>
                <ReferenceInput validate={required()} source="ProblemID" reference="problem" label="ProblemID">
                    <SelectInput optionText="ProblemTipiID" />
                </ReferenceInput>

                <ReferenceInput validate={required()} source="KullaniciAdi" reference="personel" label="KullaniciAdi">
                    <SelectInput optionText="KullaniciAdi" />
                </ReferenceInput>
                <ReferenceInput validate={required()} source="AlanID" reference="alanlar" label="AlanID">
                    <SelectInput optionText="AlanID" />
                </ReferenceInput>

                <ReferenceInput validate={required()} source="SinifID" reference="siniflar" label="SinifID">
                    <SelectInput optionText="SinifID" />
                </ReferenceInput>

                <ReferenceInput validate={required()} source="MudahaleID" reference="mudahale" label="MudahaleID">
                    <SelectInput optionText="MudahaleID" />
                </ReferenceInput>

                <ReferenceInput validate={required()} source="AktiviteID" reference="aktiviteler" label="AktiviteID">
                    <SelectInput optionText="AktiviteID" />
                </ReferenceInput>

                <TextInput source="AktiviteAciklama" label="AktiviteAciklama" validate={required()}/>

                <DateInput source="Tarihi" validate={required()}/>
            </SimpleForm>
        </Edit>
    );
}

