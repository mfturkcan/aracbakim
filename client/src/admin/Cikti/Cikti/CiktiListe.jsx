import { List, Datagrid, TextField, NumberField } from "ra-ui-materialui";

const CiktiListe = props => {
    return (
        <List id="CiktiID" {...props}>
            <Datagrid rowClick="edit">
                <NumberField source="AlanID" label="AlanID" />
                <NumberField source="SinifID" label="SinifID" />
                <NumberField source="CiktiID" label="CiktiID" />
                <TextField source="CiktiAdi" />
            </Datagrid>
        </List>
    );
}
export default CiktiListe;