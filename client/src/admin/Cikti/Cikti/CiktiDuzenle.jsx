import {Edit, SimpleForm, TextInput, SelectInput, ReferenceInput, NumberInput} from "ra-ui-materialui";
import {required} from "ra-core";

const CiktiDuzenle = props => {
    return (
        <Edit id="CiktiID" {...props}>
            <SimpleForm>
                <NumberInput source="CiktiID" label="CiktiID"/>
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
                <TextInput source="CiktiAdi" />
            </SimpleForm>
        </Edit>
    );
}
export default CiktiDuzenle;