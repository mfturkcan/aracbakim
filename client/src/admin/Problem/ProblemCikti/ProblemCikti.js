import {
    Create,
    Edit,
    SimpleForm,
    List,
    Datagrid,
    ReferenceInput, SelectInput, NumberField
} from "ra-ui-materialui";
import { required } from "ra-core";
import CustomEmptyPage from "../../CustomEmptyPage";

export const ProblemCiktiListe = props => {
    return (
        <List id="ProblemID" {...props} empty={<CustomEmptyPage Adi="Problem Cikti" />}>
            <Datagrid rowClick="edit">
                <NumberField source="AlanID" label="AlanID" />
                <NumberField source="SinifID" label="SinifID" />
                <NumberField source="CiktiID" label="CiktiID" />
                <NumberField source="ProblemID" label="ProblemID"/>
            </Datagrid>
        </List>
    );
}

export const ProblemCiktiEkle = props => {
    return (
        <Create id="MudahaleID" {...props}>
            <SimpleForm>
                <ReferenceInput validate={required()} source="CiktiID" reference="cikti" label="CiktiID">
                    <SelectInput optionText={(src)=>{
                        return `${src["CiktiID"]} - ${src["CiktiAdi"]}`
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
                    <SelectInput optionText={(src)=>{
                        return `${src["ProblemTipiID"]} - ${src["ProblemTanimi"]}`
                    }} />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    );
}

export const ProblemCiktiDuzenle = props => {
    return (
        <Edit id="MudahaleID" {...props}>
            <SimpleForm>
                <ReferenceInput validate={required()} source="CiktiID" reference="cikti" label="CiktiID">
                    <SelectInput optionText={(src)=>{
                        return `${src["CiktiID"]} - ${src["CiktiAdi"]}`
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
                    <SelectInput optionText={(src)=>{
                        return `${src["ProblemTipiID"]} - ${src["ProblemTanimi"]}`
                    }} />
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    );
}

