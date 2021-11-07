import { List, Datagrid, TextField, NumberField } from "ra-ui-materialui";

const BelirtecListe = props => {
    return (
        <List id="BelirtecID" {...props}>
            <Datagrid rowClick="edit">
                <NumberField source="BelirtecID" />
                <TextField source="BelirtecTanimi" />
            </Datagrid>
        </List>
    );
}
export default BelirtecListe;