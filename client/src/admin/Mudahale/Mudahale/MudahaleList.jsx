import { List, Datagrid, TextField, NumberField } from "ra-ui-materialui";

const MudahaleListe = props => {
    return (
        <List id="MudahaleID" {...props}>
            <Datagrid rowClick="edit">
                <NumberField source="AlanID" label="AlanID" />
                <NumberField source="SinifID" label="SinifID" />
                <NumberField source="MudahaleID" label="MudahaleID" />
                <TextField source="MudahaleAdi" />
            </Datagrid>
        </List>
    );
}
export default MudahaleListe;