import { Create, SimpleForm, DateInput, NumberInput } from "ra-ui-materialui";

const ProblemBirimEkle = props => {
    return (
        <Create id="ProblemID" {...props}>
            <SimpleForm rowClick="edit">
                <NumberInput source="ProblemID" />
                <NumberInput source="BirimID" />
                <DateInput source="EslesmeTarihi" />
            </SimpleForm>
        </Create>
    );
}
export default ProblemBirimEkle;