import {
    Create,
    Edit,
    SimpleForm,
    List,
    Datagrid,
    ReferenceInput, SelectInput, NumberField, TextField, DateField, TextInput, DateInput, NumberInput
} from "ra-ui-materialui";
import { required } from "ra-core";
import CustomEmptyPage from "../../CustomEmptyPage";

export const IlaveMudahaleDetayListe = props => {
    return (
        <List id="AktiviteID" {...props} empty={<CustomEmptyPage Adi="Ilave Mudahale Detay" />}>
            <Datagrid rowClick="edit">
                <NumberField source="AktiviteID" label="AktiviteID"/>
                <NumberField source="AlanID" label="AlanID" />
                <NumberField source="SinifID" label="SinifID" />
                <NumberField source="MudahaleID" label="MudahaleID" />
                <NumberField source="ProblemID" label="ProblemID"/>
                <NumberField source="Sira" label="Sira"/>
                <TextField source="EkleyenKullaniciAdi" label="EkleyenKullaniciAdi"/>
                <DateField source="EklenmeTarihi" label="EklenmeTarihi"/>
            </Datagrid>
        </List>
    );
}

export const IlaveMudahaleDetayEkle = props => {
    return (
        <Create id="AktiviteID" {...props}>
            <SimpleForm>
                <ReferenceInput validate={required()} source="AktiviteID" reference="aktiviteler" label="AktiviteID">
                    <SelectInput optionText={(src)=>{
                        return `${src["AktiviteID"]} - ${src["AktiviteTanimi"]}`
                    }} />

                </ReferenceInput>
                <ReferenceInput validate={required()} source="MudahaleID" reference="mudahale" label="MudahaleID">
                    <SelectInput optionText={(src)=>{
                        return `${src["MudahaleID"]} - ${src["MudahaleAdi"]}`
                    }} />
                </ReferenceInput>
                <ReferenceInput validate={required()} source="AlanID" reference="alanlar" label="AlanID">
                    <SelectInput optionText={(src)=>{
                        return `${src["AlanID"]} - ${src["AlanAdi"]}`
                    }} />
                </ReferenceInput>
                <ReferenceInput validate={required()} source="SinifID" reference="siniflar" label="SinifID">
                    <SelectInput optionText={(src)=>{
                        return `${src["SinifID"]} - ${src["SinifAdi"]}`
                    }} />
                </ReferenceInput>

                <ReferenceInput validate={required()} source="ProblemID" reference="problem" label="ProblemID">
                    <SelectInput optionText="ProblemTipiID" />
                </ReferenceInput>

                <NumberInput source="Sira" label="Sira" validate={required()}/>
                <ReferenceInput validate={required()} source="EkleyenKullaniciAdi" reference="kullanicilar" label="EkleyenKullaniciAdi">
                    <SelectInput optionText="KullaniciAdi" />
                </ReferenceInput>
                <DateInput source="EklenmeTarihi" label="EklenmeTarihi" validate={required()}/>
            </SimpleForm>
        </Create>
    );
}

export const IlaveMudahaleDetayDuzenle = props => {
    return (
        <Edit id="AktiviteID" {...props}>
            <SimpleForm>
                <ReferenceInput validate={required()} source="AktiviteID" reference="aktiviteler" label="AktiviteID">
                    <SelectInput optionText={(src)=>{
                        return `${src["AktiviteID"]} - ${src["AktiviteTanimi"]}`
                    }} />

                </ReferenceInput>
                <ReferenceInput validate={required()} source="MudahaleID" reference="mudahale" label="MudahaleID">
                    <SelectInput optionText={(src)=>{
                        return `${src["MudahaleID"]} - ${src["MudahaleAdi"]}`
                    }} />
                </ReferenceInput>
                <ReferenceInput validate={required()} source="AlanID" reference="alanlar" label="AlanID">
                    <SelectInput optionText={(src)=>{
                        return `${src["AlanID"]} - ${src["AlanAdi"]}`
                    }} />
                </ReferenceInput>
                <ReferenceInput validate={required()} source="SinifID" reference="siniflar" label="SinifID">
                    <SelectInput optionText={(src)=>{
                        return `${src["SinifID"]} - ${src["SinifAdi"]}`
                    }} />
                </ReferenceInput>

                <ReferenceInput validate={required()} source="ProblemID" reference="problem" label="ProblemID">
                    <SelectInput optionText="ProblemTipiID" />
                </ReferenceInput>

                <NumberInput source="Sira" label="Sira" validate={required()}/>
                <ReferenceInput validate={required()} source="EkleyenKullaniciAdi" reference="kullanicilar" label="EkleyenKullaniciAdi">
                    <SelectInput optionText="KullaniciAdi" />
                </ReferenceInput>
                <DateInput source="EklenmeTarihi" label="EklenmeTarihi" validate={required()}/>
            </SimpleForm>
        </Edit>
    );
}

