import { List, Datagrid, NumberField } from "ra-ui-materialui";

const CiktiDetayListe = props => {
    return (
        <List id="CiktiID" {...props}>
            <Datagrid rowClick="edit">
                <NumberField source="AlanID" />
                <NumberField source="SinifID" />
                <NumberField source="CiktiID" />
                <NumberField source="BelirtecID" />
                <NumberField source="Sira" />
            </Datagrid>
        </List>
    );
}
export default CiktiDetayListe;