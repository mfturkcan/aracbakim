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

export const PersonelProblemListe = props => {
    return (
        <List id="KullaniciAdi" {...props} empty={<CustomEmptyPage Adi="Personel Problem" />}>
            <Datagrid rowClick="edit">
                <NumberField source="KullaniciAdi" label="KullaniciAdi" />
                <NumberField source="ProblemID" label="ProblemID"/>
            </Datagrid>
        </List>
    );
}

export const PersonelProblemEkle = props => {
    return (
        <Create id="KullaniciAdi" {...props}>
            <SimpleForm>
                <ReferenceInput validate={required()} source="KullaniciAdi" reference="personel" label="KullaniciAdi">
                    <SelectInput optionText="KullaniciAdi" />
                </ReferenceInput>

                <ReferenceInput validate={required()} source="ProblemID" reference="problem" label="ProblemID">
                    <SelectInput optionText={(src)=>{
                        return `${src["ProblemTipiID"]} - ${src["ProblemTanimi"]}`;
                    }} />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    );
}

export const PersonelProblemDuzenle = props => {
    return (
        <Edit id="KullaniciAdi" {...props}>
            <SimpleForm>
                <ReferenceInput validate={required()} source="KullaniciAdi" reference="personel" label="KullaniciAdi">
                    <SelectInput optionText="KullaniciAdi" />
                </ReferenceInput>
                <ReferenceInput validate={required()} source="ProblemID" reference="problem" label="ProblemID">
                    <SelectInput optionText={(src)=>{
                        return `${src["ProblemTipiID"]} - ${src["ProblemTanimi"]}`;
                    }} />
                </ReferenceInput>
            </SimpleForm>
        </Edit>
    );
}

