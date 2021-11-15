import { List, Datagrid, TextField, NumberField } from "ra-ui-materialui";

const AktiviteListe = props => {
    return (
        <List id="AktiviteID" {...props}>
            <Datagrid rowClick="edit">
                <NumberField source="AktiviteID" label="AktiviteID" />
                <TextField source="AktiviteTanimi" />
            </Datagrid>
        </List>
    );
}
export default AktiviteListe;