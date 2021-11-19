import { List, Datagrid, TextField, ReferenceField, SelectField } from "ra-ui-materialui";

const IlcelerListe = props => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="IlceKodu" />
                <TextField source="IlceAdi" />
                <TextField source="IlKodu" />
            </Datagrid>
        </List>
    );
}
export default IlcelerListe;
