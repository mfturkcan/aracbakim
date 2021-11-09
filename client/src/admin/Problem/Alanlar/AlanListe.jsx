import { List, Datagrid, TextField, NumberField, BooleanField, FunctionField } from "ra-ui-materialui";

const AlanlarListe = props => {
    return (
        <List id="AlanID" {...props}>
            <Datagrid rowClick="edit">
                <NumberField source="AlanID" label="AlanID" />
                <TextField source="AlanAdi" />
                <FunctionField source="AlanTipi" label="AlanTipi" render={(record, source) => {
                    return record[source] == true ? "Mudahale(1)" : "Çıktı(0)";
                }} />
            </Datagrid>
        </List>
    );
}
export default AlanlarListe;