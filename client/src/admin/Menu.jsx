import { Menu, MenuItemLink } from 'react-admin';
import PeopleIcon from '@material-ui/icons/People';
import LabelIcon from '@material-ui/icons/Label';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import GroupWorkIcon from '@material-ui/icons/GroupWork';

export const MyMenu = (props) => {
    return <Menu {...props}>
        <MenuItemLink style={{ height: "50px" }} to="/kullanicilar" primaryText="Kullanıcılar" leftIcon={<AccountBoxIcon />} />
        <MenuItemLink style={{ height: "50px" }} to="/personel" primaryText="Personel" leftIcon={<PeopleIcon />} />
        <MenuItemLink style={{ height: "50px" }} to="/birimler" primaryText="Birimler" leftIcon={<GroupWorkIcon />} />
        <MenuItemLink style={{ height: "50px" }} to="/iller" primaryText="İller" leftIcon={<LabelIcon />} />
        <MenuItemLink style={{ height: "50px" }} to="/ilceler" primaryText="İlçeler" leftIcon={<LabelIcon />} />
    </Menu>
};