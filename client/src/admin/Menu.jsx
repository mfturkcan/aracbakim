import { Menu, MenuItemLink } from 'react-admin';
import PeopleIcon from '@material-ui/icons/People';
import LabelIcon from '@material-ui/icons/Label';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import { ListItem, List, Collapse, ListItemIcon, ListItemText } from '@material-ui/core';
import { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const MyMenu = (props) => {

    let [birimOpen, setBirimOpen] = useState(false);
    let [mudahaleOpen, setMudahaleOpen] = useState(false);
    let [alanOpen, setAlanOpen] = useState(false);
    let [ilOpen, setIlOpen] = useState(false);


    function handleClick(setOpen, open) {
        setOpen(!open);
    }
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

    // {
    //     link: "/kullanicilar",
    //         primaryText: "Kullanıcılar",
    //             leftIcon: <AccountBoxIcon />
    // },
    // {
    //     link: "/personel",
    //         primaryText: "Personel",
    //             leftIcon: <PeopleIcon />
    // },

    return (
        <div>
            <List component="nav" style={{ width: "225px", height: "50px" }}>
                <MenuItemLink style={{ width: "225px", height: "50px", marginLeft: "5px" }} to="/kullanicilar" primaryText="Kullanıcılar" leftIcon={<AccountBoxIcon />} />
                <MenuItemLink style={{ width: "225px", height: "50px", marginLeft: "5px" }} to="/personel" primaryText="Personel" leftIcon={<PeopleIcon />} />
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
        </div>
    );
};


{/* <div>
    <List component="nav" style={{ width: "225px", height: "50px" }}>
        <ListItem button onClick={handleClick}>
            <ListItemIcon>
                <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText inset primary="İller" style={{ paddingLeft: "16px" }} />
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <MenuItemLink style={{ height: "50px" }} to={"/iller"} primaryText="İller" leftIcon={<AccountBoxIcon />} />
            </List>
        </Collapse>
    </List>
</div> */}

{/* <Menu {...props}>
    {
        menuList.map((menuItem) => {
            return <MenuItemLink style={{ height: "50px" }} to={menuItem.link} primaryText={menuItem.primaryText} leftIcon={menuItem.leftIcon} />
        })
    }
</Menu> */}