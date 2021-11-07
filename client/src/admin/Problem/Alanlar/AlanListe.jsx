import { List, Datagrid, TextField, NumberField, BooleanField } from "ra-ui-materialui";

const AlanlarListe = props => {
    return (
        <List id="AlanID" {...props}>
            <Datagrid rowClick="edit">
                <NumberField source="AlanID" />
                <TextField source="AlanAdi" />
                <BooleanField source="AlanTipi" />
            </Datagrid>
        </List>
    );
}
export default AlanlarListe;