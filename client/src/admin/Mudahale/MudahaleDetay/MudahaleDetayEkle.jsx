import { Create, SimpleForm, TextInput, NumberInput, ReferenceInput, SelectInput } from "ra-ui-materialui";
import { required } from 'ra-core';

const MudahaleDetayEkle = props => {
    return (
        <Create id="MudahaleID" {...props}>
            <SimpleForm rowClick="edit">
                <ReferenceInput source="AlanID" reference="alanlar" label="AlanID" validate={required()}>
                    <SelectInput optionText={(src) => {
                        return (`${src["AlanID"]} - ${src["AlanAdi"]}`);
                    }} />
                </ReferenceInput>
                <ReferenceInput source="SinifID" reference="siniflar" label="SinifID" validate={required()}>
                    <SelectInput optionText={(src) => {
                        return (`${src["SinifID"]} - ${src["SinifAdi"]}`);
                    }} />
                </ReferenceInput>
                <ReferenceInput source="MudahaleID" reference="mudahale" label="MudahaleID" validate={required()}>
                    <SelectInput optionText={(src) => {
                        return (`${src["MudahaleID"]} - ${src["MudahaleAdi"]}`);
                    }} />
                </ReferenceInput>
                <ReferenceInput source="AktiviteID" reference="aktiviteler" label="AktiviteID" validate={required()}>
                    <SelectInput optionText={(src) => {
                        return (`${src["AktiviteID"]} - ${src["AktiviteTanimi"]}`);
                    }} />
                </ReferenceInput>
                <NumberInput source="Sira" validate={required()} />
            </SimpleForm>
        </Create>
    );
}
export default MudahaleDetayEkle;