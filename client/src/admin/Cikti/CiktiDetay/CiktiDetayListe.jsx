import { List, Datagrid, NumberField } from "ra-ui-materialui";

const CiktiDetayListe = props => {
    return (
        <List id="CiktiID" {...props}>
            <Datagrid rowClick="edit">
                <NumberField source="AlanID" label="AlanID" />
                <NumberField source="SinifID" label="SinifID" />
                <NumberField source="CiktiID" label="CiktiID" />
                <NumberField source="BelirtecID" label="BelirtecID" />
                <NumberField source="Sira" />
            </Datagrid>
        </List>
    );
}
export default CiktiDetayListe;