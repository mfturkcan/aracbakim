import { Menu, MenuItemLink } from 'react-admin';
import PeopleIcon from '@material-ui/icons/People';
import LabelIcon from '@material-ui/icons/Label';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import GroupWorkIcon from '@material-ui/icons/GroupWork';

export const MyMenu = (props) => {

    const menuList = [
        {
            link: "/kullanicilar",
            primaryText: "Kullanıcılar",
            leftIcon: <AccountBoxIcon />
        },
        {
            link: "/personel",
            primaryText: "Personel",
            leftIcon: <PeopleIcon />
        },
        {
            link: "/birimler",
            primaryText: "Birimler",
            leftIcon: <GroupWorkIcon />
        },
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
        {
            link: "/problem",
            primaryText: "Problemler",
            leftIcon: <AccountBoxIcon />
        },
        {
            link: "/aktiviteler",
            primaryText: "Aktivite",
            leftIcon: <AccountBoxIcon />
        },
        {
            link: "/alanlar",
            primaryText: "Alanlar",
            leftIcon: <AccountBoxIcon />
        },
        {
            link: "/belirtecler",
            primaryText: "Belirtec",
            leftIcon: <AccountBoxIcon />
        },
        {
            link: "/cikti",
            primaryText: "Çıktı",
            leftIcon: <AccountBoxIcon />
        },
        {
            link: "/ciktidetay",
            primaryText: "Çıktı Detay",
            leftIcon: <AccountBoxIcon />
        },
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
            link: "/problembirim",
            primaryText: "Problem Birim",
            leftIcon: <AccountBoxIcon />
        },
        {
            link: "/siniflar",
            primaryText: "Sınıf",
            leftIcon: <AccountBoxIcon />
        },
    ]
    return <Menu {...props}>
        {
            menuList.map((menuItem) => {
                return <MenuItemLink style={{ height: "50px" }} to={menuItem.link} primaryText={menuItem.primaryText} leftIcon={menuItem.leftIcon} />
            })
        }
    </Menu>
};