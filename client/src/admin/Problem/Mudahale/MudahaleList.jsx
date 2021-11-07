import { List, Datagrid, TextField, NumberField } from "ra-ui-materialui";

const MudahaleListe = props => {
    return (
        <List id="MudahaleID" {...props}>
            <Datagrid rowClick="edit">
                <NumberField source="AlanID" />
                <NumberField source="SinifID" />
                <NumberField source="MudahaleID" />
                <TextField source="MudahaleAdi" />
            </Datagrid>
        </List>
    );
}
export default MudahaleListe;