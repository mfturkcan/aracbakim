import { Show, SimpleShowLayout, TextField } from 'react-admin';
import { DeleteButton } from 'ra-ui-materialui';


const IllerShow = (props) => (
    <Show title="Iller" {...props}>
        <SimpleShowLayout>
            <TextField source="IlKodu" />
            <TextField source="IlAdi" />
            <DeleteButton />
        </SimpleShowLayout>
    </Show>
);

export default IllerShow;
