import React from 'react';
import clsx from 'clsx';
import { makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';
import PieChartRoundedIcon from '@material-ui/icons/PieChartRounded';
import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import AttachMoneyRoundedIcon from '@material-ui/icons/AttachMoneyRounded';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';
import {Link} from 'react-router-dom'
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';


const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);


const drawerWidth = '12rem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'white',
    color: '#1e3a8a'
  },
  sideBarHeight:{
    marginTop:'60px',
    [theme.breakpoints.up('sm')]:{
      marginTop:"80px"
    }
  },
  menuButton: {
    marginRight: 10,
    [theme.breakpoints.up('sm')]:{
      display:'none',
    }
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
    },
  },
  smallDeviceDisplay:{
    display:'none',
    [theme.breakpoints.up('sm')]:{
      display:'block'
    }
  },
  customColor:{
    color: '#1e3a8a'
  },
  btn:{
    paddingTop:0,
    paddingBottom:0,
    paddingLeft: theme.spacing(2)
  },
  text:{
    marginLeft: '-15px'
  }


}));

export default function DrawerDashBoard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <CssBaseline />




      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <div className="w-full flex justify-between items-center" >
          <div className="flex items-center">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleToggle}
            edge="start"
            className={classes.menuButton}
            >
            <MenuIcon />
          </IconButton>
          <span className="text-blue-900 text-xl font-extrabold">
            ADMIN DASHBOARD
          </span>
          </div>

          <div className=" flex items-center space-x-8">
            <span>
            <Badge badgeContent={4} color="secondary">
            <MailIcon />
            </Badge>
            </span>
          <span>
          <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <i className="fas fa-user-circle text-3xl text-blue-900"></i>
      </StyledBadge>
          </span>
        </div>
        </div>
        </Toolbar>
       
      </AppBar>






      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        
        <List className={classes.sideBarHeight}>
            <ListItem >
              <ListItemText className={classes.smallDeviceDisplay } secondary={'Dashboard'} />
            </ListItem>
            <Link to='/home'>
            <ListItem button >
              <ListItemIcon><HomeRoundedIcon className={classes.customColor} /></ListItemIcon>
              <ListItemText className={[classes.customColor,classes.text]} style={{paddingTop:'5px'}}  primary={'Home'} />
            </ListItem>
            </Link>


            <Divider  style={{marginTop:"5px"}}/>



            <ListItem >
              <ListItemText className={classes.smallDeviceDisplay} secondary={'Sales'} />
            </ListItem>
            <Link to='/analitycs'>
            <ListItem button className={classes.btn}>
              <ListItemIcon><PieChartRoundedIcon className={classes.customColor}/></ListItemIcon>
              <ListItemText primary={'Analitycs'} className={[classes.customColor,classes.text]}  />
            </ListItem>
            </Link>
            
            <Link to='/sales'>
            <ListItem button className={classes.btn}>
              <ListItemIcon><TrendingUpRoundedIcon className={classes.customColor}/></ListItemIcon>
              <ListItemText primary={'Sales'} className={[classes.customColor,classes.text]}/>
            </ListItem>
            </Link>



            <Divider  style={{marginTop:"5px"}}/>
          


            <ListItem >
              <ListItemText className={classes.smallDeviceDisplay} secondary={'Quick Menu'} />
            </ListItem>

            <Link to='/users'>
            <ListItem button className={classes.btn}>
              <ListItemIcon><PermIdentityRoundedIcon className={classes.customColor}/></ListItemIcon>
              <ListItemText primary={'Users'} className={[classes.customColor,classes.text]}  />
            </ListItem>
            </Link>

            <Link to='/products'>
            <ListItem button className={classes.btn}>
              <ListItemIcon><StorefrontRoundedIcon className={classes.customColor}/></ListItemIcon>
              <ListItemText primary={'products'} className={[classes.customColor,classes.text]}/>
            </ListItem>
            </Link>
            
            <Link to='/transactions'>
            <ListItem button className={classes.btn}>
              <ListItemIcon><AttachMoneyRoundedIcon  className={classes.customColor}/></ListItemIcon>
              <ListItemText primary={'Transactions'} className={[classes.customColor,classes.text]}/>
            </ListItem>
            </Link>

            <Link to='/reports'>
            <ListItem button className={classes.btn}>
              <ListItemIcon><BarChartRoundedIcon className={classes.customColor}/></ListItemIcon>
              <ListItemText primary={'Reports'} className={[classes.customColor,classes.text]}/>
            </ListItem>
            </Link>
        
        </List>
      
      </Drawer>
    
    </div>
  );
}
