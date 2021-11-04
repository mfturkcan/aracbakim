import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import DataProvider from "./DataProvider";
import IlcelerDuzenle from "./Ilceler/IlcelerDuzenle";
import IlcelerEkle from "./Ilceler/IlcelerEkle";
import IlcelerShow from "./Ilceler/IlcelerGöster";
import IlcelerListe from "./Ilceler/IlcelerListe";
import IllerDuzenle from "./Iller/IllerDuzenle";
import IllerEkle from "./Iller/IllerEkle";
import IllerShow from "./Iller/IllerGöster";
import IllerListe from "./Iller/IllerListe";
import KullaniciDuzenle from "./Kullanıcılar/KullaniciDuzenle";
import KullaniciEkle from "./Kullanıcılar/KullaniciEkle";
import KullaniciShow from "./Kullanıcılar/KullaniciGöster";
import KullaniciListe from "./Kullanıcılar/KullaniciListe";

const AdminPanel = props => {
    return (
        <Admin dataProvider={DataProvider}>
            <Resource name="kullanicilar" options={{ label: "Kullanıcılar" }} show={KullaniciShow} list={KullaniciListe} edit={KullaniciDuzenle} create={KullaniciEkle} />
            <Resource name="iller" options={{ label: "İller" }} show={IllerShow} list={IllerListe} edit={IllerDuzenle} create={IllerEkle} />
            <Resource name="ilceler" options={{ label: "İlçeler" }} show={IlcelerShow} list={IlcelerListe} edit={IlcelerDuzenle} create={IlcelerEkle} />
        </Admin>
    );
}


export default AdminPanel;