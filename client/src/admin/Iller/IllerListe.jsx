import { List, Datagrid, TextField, NumberField } from "ra-ui-materialui";

const IllerListe = props => {
    return (
        <List id="IlKodu" {...props}>
            <Datagrid rowClick="edit">
                <NumberField source="IlKodu" />
                <TextField source="IlAdi" />
            </Datagrid>
        </List>
    );
}
export default IllerListe;