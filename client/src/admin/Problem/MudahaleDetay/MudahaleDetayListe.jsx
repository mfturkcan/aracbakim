import { List, Datagrid, TextField, NumberField } from "ra-ui-materialui";

const MudahaleDetayListe = props => {
    return (
        <List id="MudahaleID" {...props}>
            <Datagrid rowClick="edit">
                <NumberField source="AlanID" />
                <NumberField source="SinifID" />
                <NumberField source="MudahaleID" />
                <NumberField source="AktiviteID" />
                <TextField source="Sira" />
            </Datagrid>
        </List>
    );
}
export default MudahaleDetayListe;