import { List, Datagrid, DateField, NumberField } from "ra-ui-materialui";
import CustomEmptyPage from "../../CustomEmptyPage";

const ProblemBirimListe = props => {
    return (
        <List id="ProblemID" {...props} empty={<CustomEmptyPage Adi="Problem Birim" />}>
            <Datagrid rowClick="edit">
                <NumberField source="ProblemID" label="ProblemID" />
                <NumberField source="BirimID" label="BirimID" />
                <DateField source="EslesmeTarihi" label="EslesmeTarihi" />
            </Datagrid>
        </List>
    );
}
export default ProblemBirimListe;