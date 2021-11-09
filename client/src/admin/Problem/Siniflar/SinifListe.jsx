import { List, Datagrid, TextField, NumberField, FunctionField } from "ra-ui-materialui";

const SinifListe = props => {
    return (
        <List id="SinifID" {...props}>
            <Datagrid rowClick="edit">
                <NumberField source="SinifID" label="SinifID" />
                <TextField source="SinifAdi" />
                <FunctionField source="AlanTipi" label="AlanTipi" render={(record, source) => {
                    return record[source] == true ? "Mudahale(1)" : "Çıktı(0)";
                }} />
            </Datagrid>
        </List>
    );
}
export default SinifListe;