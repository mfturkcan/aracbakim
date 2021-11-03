import { Admin, Resource, ListGuesser } from "react-admin";
import DataProvider from "./DataProvider";
import KullaniciDuzenle from "./Kullanıcılar/KullaniciDuzenle";
import KullaniciEkle from "./Kullanıcılar/KullaniciEkle";
import KullaniciListe from "./Kullanıcılar/KullaniciListe";

const AdminPanel = props => {
    return (
        <Admin dataProvider={DataProvider} >
            <Resource name="kullanicilar" options={{ label: "Kullanıcılar" }} list={KullaniciListe} edit={KullaniciDuzenle} create={KullaniciEkle} />
        </Admin>
    );
}
export default AdminPanel;