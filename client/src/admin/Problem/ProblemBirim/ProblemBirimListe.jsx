import { List, Datagrid, DateField, NumberField } from "ra-ui-materialui";

const ProblemBirimListe = props => {
    return (
        <List id="ProblemID" {...props}>
            <Datagrid rowClick="edit">
                <NumberField source="ProblemID" />
                <NumberField source="BirimID" />
                <DateField source="EslesmeTarihi" />
            </Datagrid>
        </List>
    );
}
export default ProblemBirimListe;