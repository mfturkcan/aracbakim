import { List, Datagrid, TextField } from "ra-ui-materialui";

const IllerListe = props => {
    return (
        <List id="IlKodu" {...props}>
            <Datagrid rowClick="edit">
                <TextField source="IlKodu" />
                <TextField source="IlAdi" />
            </Datagrid>
        </List>
    );
}
export default IllerListe;