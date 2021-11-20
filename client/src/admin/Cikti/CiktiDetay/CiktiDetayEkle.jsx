import {Create, SimpleForm, NumberInput, ReferenceInput, SelectInput} from "ra-ui-materialui";
import {required} from "ra-core";

const CiktiDetayEkle = props => {
    return (
        <Create id="CiktiID" {...props}>
            <SimpleForm rowClick="edit">
                <ReferenceInput validate={required()} source="AlanID" reference="alanlar" label="AlanID">
                    <SelectInput optionText={(src)=>{
                        return `${src["AlanID"]} - ${src["AlanAdi"]}`
                    }} />
                </ReferenceInput>
                <ReferenceInput validate={required()} source="CiktiID" reference="cikti" label="CiktiID">
                    <SelectInput optionText={(src)=>{
                        return `${src["CiktiID"]} - ${src["CiktiAdi"]}`
                    }} />
                </ReferenceInput>
                <ReferenceInput validate={required()} source="SinifID" reference="siniflar" label="SinifID">
                    <SelectInput optionText={(src)=>{
                        return `${src["SinifID"]} - ${src["SinifAdi"]}`
                    }} />
                </ReferenceInput>
                <ReferenceInput validate={required()} source="BelirtecID" reference="belirtecler" label="BelirtecID">
                    <SelectInput optionText={(src)=>{
                        return `${src["BelirtecID"]} - ${src["BelirtecTanimi"]}`
                    }} />
                </ReferenceInput>
                <NumberInput source="Sira" />
            </SimpleForm>
        </Create>
    );
}
export default CiktiDetayEkle;