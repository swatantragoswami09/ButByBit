import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Header from '../Banner/Header';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import hyperbridge from "../../assets/image/hyperbridge/hyperbridge.svg"
import IntegrateEVM from "../../assets/image/hyperbridge/IntegrateEVM.svg"
import './hyperbridge.css';
import Arrow from '../../assets/image/hyperbridge/Arrow.svg'
import BackgroundImage from "../../assets/image/banner/backgroundImage.svg"
import hyperbridgeIntegrate from "../../assets/image/hyperbridge/hyperbridge.svg"
import EVMbackground from "../../assets/image/hyperbridge/IntegrateEVM.jpg"
import Waveimg from '../../assets/image/hyperbridge/Wavebackground.svg'
import Uparrow from "../../assets/image/Uparrow.svg";
import { spacing } from '@mui/system';
import { makeStyles } from "@material-ui/core/styles";
import Background from "../../assets/image/hyperbridge/BackgroundImage.png"

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: '100%',


  }),
);
const gridStyles = {




};
const useStyled = makeStyles((theme) => ({
  paperContainer: {
    backgroundImage: `url(${BackgroundImage})`,
    height: "100vh",
    width: "100vw"
  }


}))
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {

    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  //  necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
const MainContainer = styled('div')(() => ({


}))

export default function Hyperbridge() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const Classes = useStyled();
  return (

    <div  >


      <Grid container
        justifyContent="center"
        sx={{
          backgroundImage: `url(${Background})`,

        }}
      >

        <Grid item>
          <Grid container
            direction="column"
            alignItems="center">
            <Grid item className="header">
              Cross-Chain Interoperability Made Simple
            </Grid>
            <Grid item className="sub-header">
              HyperBridge is a Token Bridge Protocol Across Multiple Blockchains. The Gateway to Cross-Chain Interoperable ecosystem that lets you bridge tokens on multiple chains at your fingertips
            </Grid>
            <Grid item>
              <Grid container
                alignItems="center"
                justifyContent="center" sx={{ border: "1px solid white" }}>
                <Grid item>
                  <div className="enter-app-button-container">
                    <div className="enter-app-button">Enter App</div>
                    <img src={Uparrow} />
                  </div>
                </Grid>
                <Grid item className="solana">
                  Solana support coming soon....
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <img src={hyperbridge} className="hyperbridge-image"></img>
        </Grid>

      </Grid>

    </div>

  );
}
