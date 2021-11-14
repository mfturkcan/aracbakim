import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import DataProvider from "./DataProvider";
import IlcelerDuzenle from "./Ilceler/IlcelerDuzenle";
import IlcelerEkle from "./Ilceler/IlcelerEkle";
import IlcelerShow from "./Ilceler/IlcelerGoster";
import IlcelerListe from "./Ilceler/IlcelerListe";
import IllerDuzenle from "./Iller/IllerDuzenle";
import IllerEkle from "./Iller/IllerEkle";
import IllerShow from "./Iller/IllerGoster";
import IllerListe from "./Iller/IllerListe";
import KullaniciDuzenle from "./Kullanicilar/KullaniciDuzenle";
import KullaniciEkle from "./Kullanicilar/KullaniciEkle";
import KullaniciShow from "./Kullanicilar/KullaniciGoster";
import KullaniciListe from "./Kullanicilar/KullaniciListe";
import PersonelListe from "./Personel/PersonelListe";
import BirimlerListe from "./Birimler/BirimlerListe";
import PersonelEkle from "./Personel/PersonelEkle";
import PersonelDuzenle from "./Personel/PersonelDuzenle";
import BirimlerEkle from "./Birimler/BirimlerEkle";
import BirimlerDuzenle from "./Birimler/BirimlerDuzenle";
import MyLayout from "./Layout";
import ProblemListe from './Problem/ProblemListe';
import ProblemDuzenle from './Problem/ProblemDuzenle';
import ProblemEkle from "./Problem/ProblemEkle";
import AktiviteListe from './Problem/Aktivite/AktiviteListe';
import AktiviteEkle from './Problem/Aktivite/AktiviteEkle';
import AktiviteDuzenle from './Problem/Aktivite/AktiviteDuzenle';
import AlanlarListe from './Problem/Alanlar/AlanListe';
import AlanlarEkle from './Problem/Alanlar/AlanEkle';
import AlanlarDuzenle from './Problem/Alanlar/AlanDuzenle';
import MudahaleListe from './Problem/Mudahale/MudahaleList';
import MudahaleEkle from './Problem/Mudahale/MudahaleEkle';
import MudahaleDuzenle from './Problem/Mudahale/MudahaleDuzenle';
import SinifListe from './Problem/Siniflar/SinifListe';
import SinifEkle from './Problem/Siniflar/SinifEkle';
import SinifDuzenle from './Problem/Siniflar/SinifDuzenle';
import BelirtecListe from './Problem/Belirtecler/BelirtecListe';
import BelirtecEkle from './Problem/Belirtecler/BelirtecEkle';
import BelirtecDuzenle from './Problem/Belirtecler/BelirtecDuzenle';
import CiktiListe from './Problem/Cikti/CiktiListe';
import CiktiEkle from './Problem/Cikti/CiktiEkle';
import CiktiDuzenle from './Problem/Cikti/CiktiDuzenle';
import CiktiDetayListe from './Problem/CiktiDetay/CiktiDetayListe';
import CiktiDetayEkle from './Problem/CiktiDetay/CiktiDetayEkle';
import CiktiDetayDuzenle from './Problem/CiktiDetay/CiktiDetayDuzenle';
import MudahaleDetayListe from './Problem/MudahaleDetay/MudahaleDetayListe';
import MudahaleDetayDuzenle from './Problem/MudahaleDetay/MudahaleDetayDuzenle';
import MudahaleDetayEkle from './Problem/MudahaleDetay/MudahaleDetayEkle';
import ProblemBirimListe from './Problem/ProblemBirim/ProblemBirimListe';
import ProblemBirimEkle from './Problem/ProblemBirim/ProblemBirimEkle';
import ProblemBirimDuzenle from './Problem/ProblemBirim/ProblemBirimDuzenle';
import { useAuth } from "../context/AuthContext";
import { axiosInstance } from "../App";
import { useHistory } from "react-router";
import NotFound from './NotFound';
import { useEffect } from 'react';

const theme = {}
const AdminPanel = props => {

    const [user, setUser] = useAuth();
    const history = useHistory();

    const authProvider = {
        // authentication
        login: params => Promise.resolve(),
        checkError: error => Promise.resolve(),
        checkAuth: params => Promise.resolve(),
        logout: async () => {
            if (user.role != "") {
                await axiosInstance.get("/logout");
            }
            setUser({
                username: '',
                role: '',
            });
            history.push("/");
            Promise.resolve();
        },
        getIdentity: () => Promise.resolve(),
        // authorization
        getPermissions: params => Promise.resolve(),
    };

    const MudurPanel = () => {
        return <Admin dataProvider={DataProvider} layout={MyLayout} theme={theme} loginPage={false} catchAll={NotFound} authProvider={authProvider}>
            <Resource name="personel" options={{ label: "Personel" }} list={PersonelListe} edit={PersonelDuzenle} />
            <Resource name="problem" options={{ label: "Problem" }} list={ProblemListe} create={ProblemEkle} edit={ProblemDuzenle} />
            <Resource name="aktiviteler" options={{ label: "Aktivite" }} list={AktiviteListe} create={AktiviteEkle} edit={AktiviteDuzenle} />
            <Resource name="alanlar" options={{ label: "Alanlar" }} list={AlanlarListe} create={AlanlarEkle} edit={AlanlarDuzenle} />
            <Resource name="mudahale" options={{ label: "Mudahaleler" }} list={MudahaleListe} create={MudahaleEkle} edit={MudahaleDuzenle} />
            <Resource name="siniflar" options={{ label: "Sınıflar" }} list={SinifListe} create={SinifEkle} edit={SinifDuzenle} />
            <Resource name="belirtecler" options={{ label: "Belirteçler" }} list={BelirtecListe} create={BelirtecEkle} edit={BelirtecDuzenle} />
            <Resource name="cikti" options={{ label: "Çıktılar" }} list={CiktiListe} create={CiktiEkle} edit={CiktiDuzenle} />
            <Resource name="ciktidetay" options={{ label: "Çıktı Detay" }} list={CiktiDetayListe} create={CiktiDetayEkle} edit={CiktiDetayDuzenle} />
            <Resource name="mudahaledetay" options={{ label: "Müdahale Detay" }} list={MudahaleDetayListe} create={MudahaleDetayEkle} edit={MudahaleDetayDuzenle} />
            <Resource name="problembirim" options={{ label: "Problem Birim" }} list={ProblemBirimListe} create={ProblemBirimEkle} edit={ProblemBirimDuzenle} />
            <Resource name="birimler" options={{ label: "Birimler" }} list={BirimlerListe} create={BirimlerEkle} edit={BirimlerDuzenle} />

        </Admin>
    };

    const YoneticiPanel = () => {
        return <Admin dataProvider={DataProvider} layout={MyLayout} theme={theme} loginPage={false} catchAll={NotFound} authProvider={authProvider}>
            <Resource name="kullanicilar" options={{ label: "Kullanıcılar" }} show={KullaniciShow} list={KullaniciListe} edit={KullaniciDuzenle} create={KullaniciEkle} />
            <Resource name="personel" options={{ label: "Personel" }} list={PersonelListe} create={PersonelEkle} edit={PersonelDuzenle} />
            <Resource name="birimler" options={{ label: "Birimler" }} list={BirimlerListe} create={BirimlerEkle} edit={BirimlerDuzenle} />
            <Resource name="iller" options={{ label: "İller" }} show={IllerShow} list={IllerListe} edit={IllerDuzenle} create={IllerEkle} />
            <Resource name="ilceler" options={{ label: "İlçeler" }} show={IlcelerShow} list={IlcelerListe} edit={IlcelerDuzenle} create={IlcelerEkle} />
            <Resource name="problem" options={{ label: "Problem" }} list={ProblemListe} create={ProblemEkle} edit={ProblemDuzenle} />
            <Resource name="aktiviteler" options={{ label: "Aktivite" }} list={AktiviteListe} create={AktiviteEkle} edit={AktiviteDuzenle} />
            <Resource name="alanlar" options={{ label: "Alanlar" }} list={AlanlarListe} create={AlanlarEkle} edit={AlanlarDuzenle} />
            <Resource name="mudahale" options={{ label: "Mudahaleler" }} list={MudahaleListe} create={MudahaleEkle} edit={MudahaleDuzenle} />
            <Resource name="siniflar" options={{ label: "Sınıflar" }} list={SinifListe} create={SinifEkle} edit={SinifDuzenle} />
            <Resource name="belirtecler" options={{ label: "Belirteçler" }} list={BelirtecListe} create={BelirtecEkle} edit={BelirtecDuzenle} />
            <Resource name="cikti" options={{ label: "Çıktılar" }} list={CiktiListe} create={CiktiEkle} edit={CiktiDuzenle} />
            <Resource name="ciktidetay" options={{ label: "Çıktı Detay" }} list={CiktiDetayListe} create={CiktiDetayEkle} edit={CiktiDetayDuzenle} />
            <Resource name="mudahaledetay" options={{ label: "Müdahale Detay" }} list={MudahaleDetayListe} create={MudahaleDetayEkle} edit={MudahaleDetayDuzenle} />
        </Admin>
    }


    return (
        user.role != "" ? user.role == "Yönetici" ? YoneticiPanel() : MudurPanel() : <Admin dataProvider={DataProvider} loginPage={false} authProvider={authProvider}>
            <Resource name="kullanicilar" options={{ label: "Kullanıcılar" }} list={KullaniciListe} />
        </Admin>
    );
}


export default AdminPanel;