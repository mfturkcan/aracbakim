import { List, Datagrid, TextField, NumberField, BooleanField } from "ra-ui-materialui";

const SinifListe = props => {
    return (
        <List id="SinifID" {...props}>
            <Datagrid rowClick="edit">
                <NumberField source="SinifID" />
                <TextField source="SinifAdi" />
                <BooleanField source="AlanTipi" />
            </Datagrid>
        </List>
    );
}
export default SinifListe;