import { List, Datagrid, TextField, NumberField } from "ra-ui-materialui";

const CiktiListe = props => {
    return (
        <List id="CiktiID" {...props}>
            <Datagrid rowClick="edit">
                <NumberField source="AlanID" />
                <NumberField source="SinifID" />
                <NumberField source="CiktiID" />
                <TextField source="CiktiAdi" />
            </Datagrid>
        </List>
    );
}
export default CiktiListe;