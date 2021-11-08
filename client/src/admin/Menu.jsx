import { Menu, MenuItemLink } from 'react-admin';
import PeopleIcon from '@material-ui/icons/People';
import LabelIcon from '@material-ui/icons/Label';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import { ListItem, List, Collapse, ListItemIcon, ListItemText } from '@material-ui/core';
import { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAuth } from '../context/AuthContext';
import ErrorIcon from '@mui/icons-material/Error';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import CarRepairIcon from '@mui/icons-material/CarRepair';
import DetailsIcon from '@mui/icons-material/Details';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import RoomIcon from '@mui/icons-material/Room';

export const MyMenu = (props) => {

    let [birimOpen, setBirimOpen] = useState(false);
    let [mudahaleOpen, setMudahaleOpen] = useState(false);
    let [alanOpen, setAlanOpen] = useState(false);
    let [ilOpen, setIlOpen] = useState(false);
    const [user, setUser] = useAuth();

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
            ],
        },
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
            listName: "Alanlar - Sınıflar",
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
                    primaryText: "Sınıf",
                    leftIcon: <AccountTreeIcon />
                },
                {
                    link: "/belirtecler",
                    primaryText: "Belirteç",
                    leftIcon: <CallToActionIcon />
                },
            ],
        },
        {
            listIcon: <RoomIcon />,
            listName: "İller - İlçeler",
            state: ilOpen,
            stateMethod: setIlOpen,
            menuItems: [
                {
                    link: "/iller",
                    primaryText: "İller",
                    leftIcon: <LocationCityIcon />
                },
                {
                    link: "/ilceler",
                    primaryText: "İlçeler",
                    leftIcon: <LocationCityIcon />
                },
            ],
        }
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
                    link: "/problembirim",
                    primaryText: "Problem Birim",
                    leftIcon: <HomeRepairServiceIcon />
                },
            ],
        },
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
            listName: "Alanlar - Sınıflar",
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
                    primaryText: "Sınıf",
                    leftIcon: <AccountTreeIcon />
                },
                {
                    link: "/belirtecler",
                    primaryText: "Belirteç",
                    leftIcon: <CallToActionIcon />
                },
            ],
        },
    ]

    function handleClick(setOpen, open) {
        setOpen(!open);
    }


    const menuList = user.role == "Yönetici" ? yoneticiList : mudurList;

    return (
        <Menu {...props}>
            <List component="nav" style={{ height: "50px" }}>
                {user.role == "Yönetici" &&
                    <div>
                        <MenuItemLink style={{ height: "50px", marginLeft: "5px" }} to="/kullanicilar" primaryText="Kullanıcılar" leftIcon={<AccountBoxIcon />} />
                        <MenuItemLink style={{ height: "50px", marginLeft: "5px" }} to="/personel" primaryText="Personel" leftIcon={<PeopleIcon />} />
                    </div>
                }
                {
                    menuList.map(menu => {
                        return <div>
                            <ListItem button onClick={() => {
                                handleClick(menu.stateMethod, menu.state)
                            }}>
                                <ListItemIcon>
                                    {menu.listIcon}
                                </ListItemIcon>
                                <ListItemText inset primary={menu.listName} style={{ paddingLeft: "0px" }} />
                                {menu.state ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                            </ListItem>
                            <Collapse in={menu.state} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {
                                        menu.menuItems.map(menuItem => {
                                            return <MenuItemLink style={{ height: "35px", marginLeft: "5px" }} to={menuItem.link} primaryText={menuItem.primaryText} leftIcon={menuItem.leftIcon} />
                                        })
                                    }
                                </List>
                            </Collapse>
                        </div>
                    })
                }
            </List>
        </Menu>
    );
};


/*
    const menuList = [
        {
            listIcon: <AccountBoxIcon />,
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
                    leftIcon: <AccountBoxIcon />
                },
                {
                    link: "/problembirim",
                    primaryText: "Problem Birim",
                    leftIcon: <AccountBoxIcon />
                },
            ],
        },
        {
            listIcon: <AccountBoxIcon />,
            listName: "Mudahale",
            state: mudahaleOpen,
            stateMethod: setMudahaleOpen,
            menuItems: [
                {
                    link: "/mudahale",
                    primaryText: "Mudahale",
                    leftIcon: <AccountBoxIcon />
                },
                {
                    link: "/mudahaledetay",
                    primaryText: "Mudahale Detay",
                    leftIcon: <AccountBoxIcon />
                },
                {
                    link: "/aktiviteler",
                    primaryText: "Aktivite",
                    leftIcon: <AccountBoxIcon />
                },
            ],
        },
        {
            listIcon: <AccountBoxIcon />,
            listName: "Alanlar - Sınıflar",
            state: alanOpen,
            stateMethod: setAlanOpen,
            menuItems: [
                {
                    link: "/alanlar",
                    primaryText: "Alanlar",
                    leftIcon: <AccountBoxIcon />
                },
                {
                    link: "/siniflar",
                    primaryText: "Sınıf",
                    leftIcon: <AccountBoxIcon />
                },
                {
                    link: "/belirtecler",
                    primaryText: "Belirteç",
                    leftIcon: <AccountBoxIcon />
                },
            ],
        },
        {
            listIcon: <AccountBoxIcon />,
            listName: "İller - İlçeler",
            state: ilOpen,
            stateMethod: setIlOpen,
            menuItems: [
                {
                    link: "/iller",
                    primaryText: "İller",
                    leftIcon: <AccountBoxIcon />
                },
                {
                    link: "/ilceler",
                    primaryText: "İlçeler",
                    leftIcon: <AccountBoxIcon />
                },
            ],
        }
    ]
*/