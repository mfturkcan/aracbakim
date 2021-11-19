import {Admin, Resource, ListGuesser, EditGuesser, ResourceContext} from "react-admin";
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
import MudahaleListe from './Mudahale/Mudahale/MudahaleList';
import MudahaleEkle from './Mudahale/Mudahale/MudahaleEkle';
import MudahaleDuzenle from './Mudahale/Mudahale/MudahaleDuzenle';
import SinifListe from './Problem/Siniflar/SinifListe';
import SinifEkle from './Problem/Siniflar/SinifEkle';
import SinifDuzenle from './Problem/Siniflar/SinifDuzenle';
import BelirtecListe from './Problem/Belirtecler/BelirtecListe';
import BelirtecEkle from './Problem/Belirtecler/BelirtecEkle';
import BelirtecDuzenle from './Problem/Belirtecler/BelirtecDuzenle';
import CiktiListe from './Cikti/Cikti/CiktiListe';
import CiktiEkle from './Cikti/Cikti/CiktiEkle';
import CiktiDuzenle from './Cikti/Cikti/CiktiDuzenle';
import CiktiDetayListe from './Cikti/CiktiDetay/CiktiDetayListe';
import CiktiDetayEkle from './Cikti/CiktiDetay/CiktiDetayEkle';
import CiktiDetayDuzenle from './Cikti/CiktiDetay/CiktiDetayDuzenle';
import MudahaleDetayListe from './Mudahale/MudahaleDetay/MudahaleDetayListe';
import MudahaleDetayDuzenle from './Mudahale/MudahaleDetay/MudahaleDetayDuzenle';
import MudahaleDetayEkle from './Mudahale/MudahaleDetay/MudahaleDetayEkle';
import ProblemBirimListe from './Problem/ProblemBirim/ProblemBirimListe';
import ProblemBirimEkle from './Problem/ProblemBirim/ProblemBirimEkle';
import ProblemBirimDuzenle from './Problem/ProblemBirim/ProblemBirimDuzenle';
import { useAuth } from "../context/AuthContext";
import { axiosInstance } from "../App";
import { useHistory } from "react-router";
import NotFound from './NotFound';
import { useEffect } from 'react';
import {ProblemMudahaleEkle, ProblemMudahaleDuzenle, ProblemMudahaleListe} from "./Problem/ProblemMudahale/ProblemMudahale";
import {ProblemCiktiDuzenle, ProblemCiktiListe, ProblemCiktiEkle} from "./Problem/ProblemCikti/ProblemCikti";
import {IlaveMudahaleDetayDuzenle, IlaveMudahaleDetayListe, IlaveMudahaleDetayEkle} from "./IlaveDetay/IlaveMudahaleDetay/IlaveMudahaleDetay";
import {IlaveCiktiDetayEkle, IlaveCiktiDetayListe, IlaveCiktiDetayDuzenle} from "./IlaveDetay/IlaveCiktiDetay/IlaveCiktiDetay";
import {
    PersonelProblemDuzenle,
    PersonelProblemEkle,
    PersonelProblemListe
} from "./Problem/PersonelProblem/PersonelProblem";
import {
    ProblemCiktiDegerlendirmeDuzenle,
    ProblemCiktiDegerlendirmeEkle,
    ProblemCiktiDegerlendirmeListe
} from "./ProblemDegerlendirme/ProblemCiktiDegerlendirme";
import {
    ProblemDurumDegerlendirmeDuzenle,
    ProblemDurumDegerlendirmeEkle,
    ProblemDurumDegerlendirmeListe
} from "./ProblemDegerlendirme/ProblemDurumDegerlendirme";
import {CalisanProblemDuzenle, CalisanProblemEkle, CalisanProblemListe} from "./Problem/CalisanProblem/CalisanProblem";

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
            <Resource name="problembirim" options={{ label: "Problem Birim" }} list={ProblemBirimListe} create={ProblemBirimEkle} edit={ProblemBirimDuzenle} />
            <Resource name="birimler" options={{ label: "Birimler" }} list={BirimlerListe} create={BirimlerEkle} edit={BirimlerDuzenle} />
            <Resource name="problemmudahale" options={{ label: "Problem Mudahale" }} list={ProblemMudahaleListe} create={ProblemMudahaleEkle} edit={ProblemMudahaleDuzenle} />
            <Resource name="problemcikti" options={{ label: "Problem Çıktı" }} list={ProblemCiktiListe} create={ProblemCiktiEkle} edit={ProblemCiktiDuzenle} />
            <Resource name="ilavemudahaledetay" options={{ label: "İlave Mudahale Detay" }} list={IlaveMudahaleDetayListe} create={IlaveMudahaleDetayEkle} edit={IlaveMudahaleDetayDuzenle} />
            <Resource name="kullanicilar" options={{ label: "Kullanıcılar" }} show={KullaniciShow} list={KullaniciListe} edit={KullaniciDuzenle} create={KullaniciEkle} />
            <Resource name="ilaveciktidetay" options={{ label: "İlave Çıktı Detay" }} list={IlaveCiktiDetayListe} create={IlaveCiktiDetayEkle} edit={IlaveCiktiDetayDuzenle} />
            <Resource name="personelproblem" options={{ label: "Personel Problem" }} list={PersonelProblemListe} edit={PersonelProblemDuzenle} create={PersonelProblemEkle} />
            <Resource name="calisanproblem" options={{ label: "Çalışan Problem" }} list={CalisanProblemListe} edit={CalisanProblemDuzenle} create={CalisanProblemEkle} />
            <Resource name="problemciktidegerlendirme" options={{ label: "Problem Çıktı Değerlendirme" }} list={ProblemCiktiDegerlendirmeListe} create={ProblemCiktiDegerlendirmeEkle} edit={ProblemCiktiDegerlendirmeDuzenle} />
            <Resource name="problemdurumdegerlendirme" options={{ label: "Problem Durum Değerlendirme" }} list={ProblemDurumDegerlendirmeListe} create={ProblemDurumDegerlendirmeEkle} edit={ProblemDurumDegerlendirmeDuzenle} />
            <Resource name="mudahaledetay" options={{ label: "Müdahale Detay" }} list={MudahaleDetayListe} create={MudahaleDetayEkle} edit={MudahaleDetayDuzenle} />
            <Resource name="ciktidetay" options={{ label: "Çıktı Detay" }} list={CiktiDetayListe} create={CiktiDetayEkle} edit={CiktiDetayDuzenle} />

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
            <Resource name="personelproblem" options={{ label: "Personel Problem" }} list={PersonelProblemListe} create={PersonelProblemEkle} edit={PersonelProblemDuzenle} />
            <Resource name="problemciktidegerlendirme" options={{ label: "Problem Çıktı Değerlendirme" }} list={ProblemCiktiDegerlendirmeListe} create={ProblemCiktiDegerlendirmeEkle} edit={ProblemCiktiDegerlendirmeDuzenle} />
            <Resource name="problemdurumdegerlendirme" options={{ label: "Problem Durum Değerlendirme" }} list={ProblemDurumDegerlendirmeListe} create={ProblemDurumDegerlendirmeEkle} edit={ProblemDurumDegerlendirmeDuzenle} />
            <Resource name="calisanproblem" options={{ label: "Çalışan Problem" }} list={CalisanProblemListe} edit={CalisanProblemDuzenle} create={CalisanProblemEkle} />
            <Resource name="problembirim" options={{ label: "Problem Birim" }} list={ProblemBirimListe} create={ProblemBirimEkle} edit={ProblemBirimDuzenle} />
            <Resource name="problemmudahale" options={{ label: "Problem Mudahale" }} list={ProblemMudahaleListe} create={ProblemMudahaleEkle} edit={ProblemMudahaleDuzenle} />
            <Resource name="problemcikti" options={{ label: "Problem Çıktı" }} list={ProblemCiktiListe} create={ProblemCiktiEkle} edit={ProblemCiktiDuzenle} />
            <Resource name="ilavemudahaledetay" options={{ label: "İlave Mudahale Detay" }} list={IlaveMudahaleDetayListe} create={IlaveMudahaleDetayEkle} edit={IlaveMudahaleDetayDuzenle} />
            <Resource name="ilaveciktidetay" options={{ label: "İlave Çıktı Detay" }} list={IlaveCiktiDetayListe} create={IlaveCiktiDetayEkle} edit={IlaveCiktiDetayDuzenle} />

        </Admin>
    }


    return (
        user.role == "" ? <Admin dataProvider={DataProvider} loginPage={false} authProvider={authProvider}>
            <Resource name="kullanicilar" options={{ label: "Kullanıcılar" }} list={KullaniciListe} />
        </Admin> :user.role == "Yönetici" ? <YoneticiPanel /> : <MudurPanel />
    );
}


export default AdminPanel;