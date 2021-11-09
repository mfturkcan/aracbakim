import { Edit, SimpleForm, DateInput, ReferenceInput, SelectInput } from "ra-ui-materialui";
import { required } from 'ra-core';

const ProblemBirimDuzenle = props => {
    return (
        <Edit id="ProblemID" {...props}>
            <SimpleForm rowClick="edit">
                <ReferenceInput validate={required()} source="BirimID" reference="birimler" label="BirimID">
                    <SelectInput optionText="BirimKodu" />
                </ReferenceInput>

                <ReferenceInput validate={required()} source="ProblemID" reference="problem" label="ProblemID">
                    <SelectInput optionText={(problem) => { console.log(problem); return (problem["ProblemTipiID"].toString() + " - " + problem["ProblemTanimi"]) }} />
                </ReferenceInput>
                <DateInput source="EslesmeTarihi" />
            </SimpleForm>
        </Edit>
    );
}
export default ProblemBirimDuzenle;