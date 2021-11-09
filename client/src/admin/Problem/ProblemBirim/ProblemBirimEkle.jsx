import { Create, SimpleForm, DateInput, ReferenceInput, SelectInput } from "ra-ui-materialui";
import { required } from 'ra-core';

const ProblemBirimEkle = props => {
    return (
        <Create id="ProblemID" {...props}>
            <SimpleForm rowClick="edit">
                <ReferenceInput validate={required()} source="BirimID" reference="birimler" label="BirimID">
                    <SelectInput optionText="BirimKodu" />
                </ReferenceInput>

                <ReferenceInput validate={required()} source="ProblemID" reference="problem" label="ProblemID">
                    <SelectInput optionText={(problem) => { console.log(problem); return (problem["ProblemTipiID"].toString() + " - " + problem["ProblemTanimi"]) }} />
                </ReferenceInput>
                <DateInput source="EslesmeTarihi" validate={required()} />
            </SimpleForm>
        </Create>
    );
}
export default ProblemBirimEkle;