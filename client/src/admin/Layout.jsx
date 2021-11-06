import { Layout, Sidebar, AppBar } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { MyMenu } from './Menu';



const MyLayout = props => <Layout {...props} menu={MyMenu} />

export default MyLayout;