import {
    Create,
    Edit,
    SimpleForm,
    List,
    Datagrid,
    ReferenceInput, SelectInput, NumberField, DateField, NumberInput, DateInput, TextField, TextInput
} from "ra-ui-materialui";
import StarIcon from '@mui/icons-material/Star';
import { required } from "ra-core";
import CustomEmptyPage from "../CustomEmptyPage";

function giveValueStar(number){
    let stars = "";

    for(var i = 0; i< number; i++) stars += "★";

    return stars;
}

const choices = [1,2,3,4,5].map(value => {
    return {id: value, name: giveValueStar(value)}
});

export const ProblemDurumDegerlendirmeListe = props => {

    return (
        <List id="ProblemID" {...props} empty={<CustomEmptyPage Adi="Problem Durum Degerlendirme" />}>
            <Datagrid rowClick="edit">
                <NumberField source="ProblemID" label="ProblemID"/>
                <NumberField source="YeniProblemID" label="YeniProblemID" />
                <TextField source="YeniProblemTanimi"/>
                <TextField source="YeniHedef"/>
                <NumberField source="OncekiProblemSkoru" label="OncekiProblemSkoru"/>
                <NumberField source="TahminEdilenProblemSkoru" label="TahminEdilenProblemSkoru"/>
                <DateField source="DegerlendirmeTarihi" label="DegerlendirmeTarihi"/>
                <TextField source="DegerlendirenKullaniciAdi" label="DegerlendirenKullaniciAdi"/>
            </Datagrid>
        </List>
    );
}

export const ProblemDurumDegerlendirmeEkle = props => {
    return (
        <Create id="ProblemID" {...props}>
            <SimpleForm>
                <ReferenceInput validate={required()} source="ProblemID" reference="problem" label="ProblemID">
                    <SelectInput optionText={(src)=>{
                        return `${src["ProblemTipiID"]} - ${src["ProblemTanimi"]}`
                    }} />
                </ReferenceInput>
                <ReferenceInput validate={required()} source="YeniProblemID" reference="problem" label="YeniProblemID">
                    <SelectInput optionText="ProblemTipiID" />
                </ReferenceInput>
                <TextInput source="YeniProblemTanimi" validate={required()}/>
                <TextInput source="YeniHedef" validate={required()}/>

                <SelectInput source="OncekiProblemSkoru" choices={choices}/>
                <SelectInput source="TahminEdilenProblemSkoru" choices={choices} validate={required()}/>
                <DateInput source="DegerlendirmeTarihi" validate={required()}/>
                <ReferenceInput validate={required()} source="DegerlendirenKullaniciAdi" reference="personel" label="DegerlendirenKullaniciAdi">
                    <SelectInput optionText="KullaniciAdi" />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    );
}

export const ProblemDurumDegerlendirmeDuzenle = props => {
    return (
        <Edit id="ProblemID" {...props}>
            <SimpleForm>
                <ReferenceInput validate={required()} source="ProblemID" reference="problem" label="ProblemID">
                    <SelectInput optionText={(src)=>{
                        return `${src["ProblemTipiID"]} - ${src["ProblemTanimi"]}`
                    }} />
                </ReferenceInput>
                <ReferenceInput validate={required()} source="YeniProblemID" reference="problem" label="YeniProblemID">
                    <SelectInput optionText="ProblemTipiID" />
                </ReferenceInput>
                <TextInput source="YeniProblemTanimi" validate={required()}/>
                <TextInput source="YeniHedef" validate={required()}/>

                <SelectInput source="OncekiProblemSkoru" choices={choices}/>
                <SelectInput source="TahminEdilenProblemSkoru" choices={choices} validate={required()}/>
                <DateInput source="DegerlendirmeTarihi" validate={required()}/>
                <ReferenceInput validate={required()} source="DegerlendirenKullaniciAdi" reference="personel" label="DegerlendirenKullaniciAdi">
                    <SelectInput optionText="KullaniciAdi" />
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    );
}

