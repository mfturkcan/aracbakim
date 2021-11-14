import { Show, SimpleShowLayout, TextField, ReferenceField } from 'react-admin';
import { DeleteButton } from 'ra-ui-materialui';

const IlcelerShow = (props) => (
    <Show title="Ilceler" {...props}>
        <SimpleShowLayout>
            <TextField source="IlceKodu" />
            <TextField source="IlceAdi" />
            <ReferenceField source="IlKodu" reference="iller" label="Il Adı">
                <TextField source="IlAdi" />
            </ReferenceField>
            <TextField source="IlKodu" />
            <DeleteButton />
        </SimpleShowLayout>
    </Show>
);

export default IlcelerShow;
