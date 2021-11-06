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
import PersonelListe from "./Personel/PersonelListe";
import BirimlerListe from "./Birimler/BirimlerListe";
import PersonelEkle from "./Personel/PersonelEkle";
import PersonelDuzenle from "./Personel/PersonelDuzenle";
import BirimlerEkle from "./Birimler/BirimlerEkle";
import BirimlerDüzenle from "./Birimler/BirimlerDüzenle";
import { createMuiTheme } from "ra-ui-materialui";
import { defaultTheme } from 'react-admin';
import merge from 'lodash/merge';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import MyLayout from "./Layout";

const theme = {}

const AdminPanel = props => {
    return (
        <Admin dataProvider={DataProvider} layout={MyLayout} theme={theme}>
            <Resource name="kullanicilar" options={{ label: "Kullanıcılar" }} show={KullaniciShow} list={KullaniciListe} edit={KullaniciDuzenle} create={KullaniciEkle} />
            <Resource name="personel" options={{ label: "Personel" }} list={PersonelListe} create={PersonelEkle} edit={PersonelDuzenle} />
            <Resource name="birimler" options={{ label: "Birimler" }} list={BirimlerListe} create={BirimlerEkle} edit={BirimlerDüzenle} />
            <Resource name="iller" options={{ label: "İller" }} show={IllerShow} list={IllerListe} edit={IllerDuzenle} create={IllerEkle} />
            <Resource name="ilceler" options={{ label: "İlçeler" }} show={IlcelerShow} list={IlcelerListe} edit={IlcelerDuzenle} create={IlcelerEkle} />
        </Admin>
    );
}


export default AdminPanel;