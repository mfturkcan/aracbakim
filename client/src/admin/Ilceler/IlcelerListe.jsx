import { List, Datagrid, TextField, ReferenceField } from "ra-ui-materialui";

const IlcelerListe = props => {
    return (
        <List id="IlceKodu" {...props}>
            <Datagrid rowClick="edit">
                <TextField source="IlceKodu" />
                <TextField source="IlceAdi" />
                <ReferenceField source="IlKodu" reference="iller" label="Il Adı">
                    <TextField source="IlAdi" />
                </ReferenceField>
                <TextField source="IlKodu" />
            </Datagrid>
        </List>
    );
}
export default IlcelerListe;