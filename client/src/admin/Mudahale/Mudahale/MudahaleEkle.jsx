import { Create, SimpleForm, TextInput, NumberInput, SelectInput, ReferenceInput } from "ra-ui-materialui";
import { required } from 'ra-core';

const MudahaleEkle = props => {
    return (
        <Create id="MudahaleID" {...props}>
            <SimpleForm rowClick="edit">
                <NumberInput source="MudahaleID" label="MudahaleID" validate={required()} />
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


                <TextInput source="MudahaleAdi" validate={required()} />
            </SimpleForm>
        </Create>
    );
}
export default MudahaleEkle;