import {
    Create,
    Edit,
    SimpleForm,
    List,
    Datagrid,
    ReferenceInput, SelectInput, NumberField, DateField, NumberInput, DateInput
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

export const ProblemCiktiDegerlendirmeListe = props => {

    return (
        <List id="BelirtecID" {...props} empty={<CustomEmptyPage Adi="Problem Çıktı Degerlendirme" />}>
            <Datagrid rowClick="edit">
                <NumberField source="BelirtecID" label="BelirtecID" />
                <NumberField source="ProblemID" label="ProblemID"/>
                <NumberField source="Skor" label="Skor"/>
                <DateField source="SkorTarihi" label="SkorTarihi"/>
            </Datagrid>
        </List>
    );
}

export const ProblemCiktiDegerlendirmeEkle = props => {
    return (
        <Create id="BelirtecID" {...props}>
            <SimpleForm>
                <ReferenceInput validate={required()} source="BelirtecID" reference="belirtecler" label="BelirtecID">
                    <SelectInput optionText="BelirtecID" />
                </ReferenceInput>

                <ReferenceInput validate={required()} source="ProblemID" reference="problem" label="ProblemID">
                    <SelectInput optionText="ProblemTipiID" />
                </ReferenceInput>

                <SelectInput source="Skor" choices={choices}/>
                <DateInput source="SkorTarihi" validate={required()}/>
            </SimpleForm>
        </Create>
    );
}

export const ProblemCiktiDegerlendirmeDuzenle = props => {
    return (
        <Edit id="BelirtecID" {...props}>
            <SimpleForm>
                <ReferenceInput validate={required()} source="BelirtecID" reference="belirtecler" label="BelirtecID">
                    <SelectInput optionText="BelirtecID" />
                </ReferenceInput>

                <ReferenceInput validate={required()} source="ProblemID" reference="problem" label="ProblemID">
                    <SelectInput optionText="ProblemTipiID" />
                </ReferenceInput>
                <SelectInput source="Skor" choices={choices}/>
                <DateInput source="SkorTarihi" validate={required()}/>
            </SimpleForm>
        </Edit>
    );
}

