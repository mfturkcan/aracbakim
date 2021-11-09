import { Datagrid, List, SelectField, TextField, ReferenceField } from "ra-ui-materialui";
import Empty from "../EmptyPage";

const BirimlerListe = props => {
    return (
        <List title="Birimler" {...props} empty={<Empty />}>
            <Datagrid rowClick="edit">
                <TextField source="BirimKodu" />
                <TextField source="BirimAdi" />

                <ReferenceField source="UstBirimKodu" reference="birimler" label="Üst Birim Adı">
                    <TextField source="BirimAdi" />
                </ReferenceField>
                <TextField source="BulunduguAdres" />

                <TextField source="IlKodu" />

                <TextField source="IlceKodu" />

                <TextField source="PostaKodu" />

                <TextField source="BirimMudurKullaniciAdi" />

            </Datagrid>
        </List>
    );
}
export default BirimlerListe;

/*
    Birimler (BirimKodu, BirimAdi, UstBirimKodu, BulunduguAdres, IlKodu, IlceKodu, PostaKodu, BirimMudurKullaniciAdi)
*/