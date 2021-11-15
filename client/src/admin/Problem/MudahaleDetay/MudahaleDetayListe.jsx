import { List, Datagrid, TextField, NumberField } from "ra-ui-materialui";

const MudahaleDetayListe = props => {
    return (
        <List id="MudahaleID" {...props}>
            <Datagrid rowClick="edit">
                <NumberField source="AlanID" label="AlanID" />
                <NumberField source="SinifID" label="SinifID" />
                <NumberField source="MudahaleID" label="MudahaleID" />
                <NumberField source="AktiviteID" label="AktiviteID" />
                <TextField source="Sira" />
            </Datagrid>
        </List>
    );
}
export default MudahaleDetayListe;