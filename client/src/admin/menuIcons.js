import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import ErrorIcon from "@mui/icons-material/Error";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import DetailsIcon from "@mui/icons-material/Details";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CallToActionIcon from "@mui/icons-material/CallToAction";
import RoomIcon from "@mui/icons-material/Room";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import {useState} from "react";

export default function useMenuIcons(){

    let [birimOpen, setBirimOpen] = useState(false);
    let [mudahaleOpen, setMudahaleOpen] = useState(false);
    let [alanOpen, setAlanOpen] = useState(false);
    let [ilOpen, setIlOpen] = useState(false);
    let [ciktiOpen, setCiktiOpen] = useState(false);
    let [detayOpen, setDetayOpen] = useState(false);
    let [degerlendirmeOpen, setDegerlendirmeOpen] = useState(false);


    const combine = [
        {
            listIcon: <MiscellaneousServicesIcon />,
            listName: "Mudahale",
            state: mudahaleOpen,
            stateMethod: setMudahaleOpen,
            menuItems: [
                {
                    link: "/mudahale",
                    primaryText: "Mudahale",
                    leftIcon: <CarRepairIcon />
                },
                {
                    link: "/mudahaledetay",
                    primaryText: "Mudahale Detay",
                    leftIcon: <DetailsIcon />
                },
                {
                    link: "/aktiviteler",
                    primaryText: "Aktivite",
                    leftIcon: <CleaningServicesIcon />
                },
            ],
        },
        {
            listIcon: <AccountTreeIcon />,
            listName: "Alanlar - S??n??flar",
            state: alanOpen,
            stateMethod: setAlanOpen,
            menuItems: [
                {
                    link: "/alanlar",
                    primaryText: "Alanlar",
                    leftIcon: <AccountTreeIcon />
                },
                {
                    link: "/siniflar",
                    primaryText: "S??n??f",
                    leftIcon: <AccountTreeIcon />
                },
                {
                    link: "/belirtecler",
                    primaryText: "Belirte??",
                    leftIcon: <CallToActionIcon />
                },
            ],
        },
        {
            listIcon: <ExitToAppIcon />,
            listName: "????kt??- ????kt??Detay",
            state: ciktiOpen,
            stateMethod: setCiktiOpen,
            menuItems: [
                {
                    link: "/cikti",
                    primaryText: "????kt??",
                    leftIcon: <ExitToAppIcon />
                },
                {
                    link: "/ciktidetay",
                    primaryText: "????kt??Detay",
                    leftIcon: <ExitToAppIcon />
                },
            ],
        },
        {
            listIcon: <QueryStatsIcon />,
            listName: "Degerlendirme",
            state: degerlendirmeOpen,
            stateMethod: setDegerlendirmeOpen,
            menuItems: [
                {
                    link: "/problemciktidegerlendirme",
                    primaryText: "Problem ????kt?? De??erlendirme",
                    leftIcon: <QueryStatsIcon />
                },
                {
                    link: "/problemdurumdegerlendirme",
                    primaryText: "Problem Durum De??erlendirme",
                    leftIcon: <QueryStatsIcon />
                },
            ],
        },
        {
            listIcon: <DetailsIcon />,
            listName: "??lave Detay",
            state: detayOpen,
            stateMethod: setDetayOpen,
            menuItems: [
                {
                    link: "/ilavemudahaledetay",
                    primaryText: "??lave Mudahale Detay",
                    leftIcon: <DetailsIcon />
                },
                {
                    link: "/ilaveciktidetay",
                    primaryText: "??lave ????kt?? Detay",
                    leftIcon: <DetailsIcon />
                },
            ],
        },
    ]

    const yoneticiList = [
        {
            listIcon: <ReportProblemIcon />,
            listName: "Birim - Problem",
            state: birimOpen,
            stateMethod: setBirimOpen,
            menuItems: [
                {
                    link: "/birimler",
                    primaryText: "Birimler",
                    leftIcon: <GroupWorkIcon />
                },
                {
                    link: "/problem",
                    primaryText: "Problemler",
                    leftIcon: <ErrorIcon />
                },
                {
                    link: "/personelproblem",
                    primaryText: "Personel Problem",
                    leftIcon: <EmojiPeopleIcon />
                },
                {
                    link: "/problembirim",
                    primaryText: "Problem Birim",
                    leftIcon: <SupervisedUserCircleIcon />
                },
                {
                    link: "/problemmudahale",
                    primaryText: "Problem Mudahale",
                    leftIcon: <HomeRepairServiceIcon />
                },
                {
                    link: "/problemcikti",
                    primaryText: "Problem ????kt??",
                    leftIcon: <ExitToAppIcon />
                },
            ],
        },

        {
            listIcon: <RoomIcon />,
            listName: "??ller - ??l??eler",
            state: ilOpen,
            stateMethod: setIlOpen,
            menuItems: [
                {
                    link: "/iller",
                    primaryText: "??ller",
                    leftIcon: <LocationCityIcon />
                },
                {
                    link: "/ilceler",
                    primaryText: "??l??eler",
                    leftIcon: <LocationCityIcon />
                },
            ],
        },
        ...combine,
    ]

     const mudurList = [
        {
            listIcon: <ReportProblemIcon />,
            listName: "Birim - Problem",
            state: birimOpen,
            stateMethod: setBirimOpen,
            menuItems: [
                {
                    link: "/problem",
                    primaryText: "Problemler",
                    leftIcon: <ErrorIcon />
                },
                {
                    link: "/personelproblem",
                    primaryText: "Personel Problem",
                    leftIcon: <EmojiPeopleIcon />
                },
                {
                    link: "/problembirim",
                    primaryText: "Problem Birim",
                    leftIcon: <SupervisedUserCircleIcon />
                },
                {
                    link: "/problemmudahale",
                    primaryText: "Problem Mudahale",
                    leftIcon: <HomeRepairServiceIcon />
                },
                {
                    link: "/problemcikti",
                    primaryText: "Problem ????kt??",
                    leftIcon: <ExitToAppIcon />
                },
            ],
        },
         ...combine,
    ]

    return {yoneticiList, mudurList};
}
