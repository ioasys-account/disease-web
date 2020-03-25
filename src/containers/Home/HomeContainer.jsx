import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import PostAdd from '@material-ui/icons/PostAdd';
import MenuIcon from '@material-ui/icons/Menu';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LogoIcon from './icons';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#FFFFFF',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Home() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: true,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <List>
      <LogoIcon />
      <ListItem button key="initial">
        {/* <ListItemIcon>
          <PostAdd />
        </ListItemIcon> */}
        <ListItemText primary="Inicial" />
      </ListItem>
      <ListItem button key="user">
        {/* <PersonOutlineIcon /> */}
        <ListItemText primary="Cidadãos" />
      </ListItem>
    </List>
  );

  return (
    <div>
      <React.Fragment key="left">
        <Drawer
          anchor="left"
          open={state.left}
          onClose={toggleDrawer('left', true)}
          className={classes.root}
        >
          {list('left')}
        </Drawer>
      </React.Fragment>
      {/* <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer('left', true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar> */}
    </div>
  );
}
