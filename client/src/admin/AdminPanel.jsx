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
import MyLayout from "./Layout";
import ProblemListe from './Problem/ProblemListe';
import ProblemDuzenle from './Problem/ProblemDüzenle';
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
            await axiosInstance.get("/logout");
            history.push("/");
            Promise.resolve();
        },
        getIdentity: () => Promise.resolve(),
        // authorization
        getPermissions: params => Promise.resolve(),
    };

    // const i18nProvider = polyglotI18nProvider(() => ENi18n, "en", { allowMissing: true, onMissingKey: (key, _, __) => key });
    return (
        <Admin dataProvider={DataProvider} layout={MyLayout} theme={theme} loginPage={false} catchAll={NotFound} authProvider={authProvider}>
            <Resource name="kullanicilar" options={{ label: "Kullanıcılar" }} show={KullaniciShow} list={KullaniciListe} edit={KullaniciDuzenle} create={KullaniciEkle} />
            <Resource name="personel" options={{ label: "Personel" }} list={PersonelListe} create={PersonelEkle} edit={PersonelDuzenle} />
            <Resource name="birimler" options={{ label: "Birimler" }} list={BirimlerListe} edit={BirimlerDüzenle} />
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
            <Resource name="problembirim" options={{ label: "Problem Birim" }} list={ProblemBirimListe} create={ProblemBirimEkle} edit={ProblemBirimDuzenle} />

        </Admin>
    );
}


export default AdminPanel;