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

export const ProblemMudahaleListe = props => {
    return (
        <List id="ProblemID" {...props} empty={<CustomEmptyPage Adi="Problem Mudahale" />}>
            <Datagrid rowClick="edit">
                <NumberField source="AlanID" label="AlanID" />
                <NumberField source="SinifID" label="SinifID" />
                <NumberField source="MudahaleID" label="MudahaleID" />
                <NumberField source="MudahaleID" label="MudahaleID"/>
            </Datagrid>
        </List>
    );
}

export const ProblemMudahaleEkle = props => {
    return (
        <Create id="MudahaleID" {...props}>
            <SimpleForm>
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
            </SimpleForm>
        </Create>
    );
}

export const ProblemMudahaleDuzenle = props => {
    return (
        <Edit id="MudahaleID" {...props}>
            <SimpleForm>
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
            </SimpleForm>
        </Edit>
    );
}

