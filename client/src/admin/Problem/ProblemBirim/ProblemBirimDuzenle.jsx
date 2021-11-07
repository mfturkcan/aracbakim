import { Edit, SimpleForm, DateInput, NumberInput } from "ra-ui-materialui";

const ProblemBirimDuzenle = props => {
    return (
        <Edit id="ProblemID" {...props}>
            <SimpleForm rowClick="edit">
                <NumberInput source="ProblemID" />
                <NumberInput source="BirimID" />
                <DateInput source="EslesmeTarihi" />
            </SimpleForm>
        </Edit>
    );
}
export default ProblemBirimDuzenle;