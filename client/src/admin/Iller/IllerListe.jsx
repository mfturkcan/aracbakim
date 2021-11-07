import { List, Datagrid, TextField, NumberField, ReferenceField } from "ra-ui-materialui";

const IllerListe = props => {
    return (
        <div>
            <List id="IlKodu" {...props}>
                <Datagrid rowClick="edit">
                    <NumberField source="IlKodu" />
                    <TextField source="IlAdi" />
                </Datagrid>
            </List>
        </div>
    );
}
export default IllerListe;