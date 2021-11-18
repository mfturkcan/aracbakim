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
import useMenuIcons from "./menuIcons";

export const MyMenu = (props) => {


    const [user, setUser] = useAuth();

    const {mudurList, yoneticiList} = useMenuIcons();

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
