import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ListTitle from 'components/core/ListTitle';

import ImgIcon from 'assets/img/logo.png';
import { TitleContainer, LogoIcon } from './stylesHome';

const drawerWidth = 256;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& .MuiListItemText-primary': {
      fontSize: 14,
      color: 'rgba(0, 0, 0, 0.87)',
      paddingLeft: 28,
      '&:hover': {
        color: '#CC3632',
      },
    },
    '& .MuiListItem-gutters': {
      '&:hover': {
        backgroundColor: 'rgba(204, 54, 50, 0.1)',
      },
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
export default function Home(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <LogoIcon src={ImgIcon} />
      <div className={classes.toolbar} />

      <Divider />
      <List>
        {['Inicial', 'Perfis', 'Médicos'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <TitleContainer>
        <ListTitle title="Saúde" />
      </TitleContainer>
      <List>
        {['Condições Pré-existentes', 'Sintomas'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <TitleContainer>
        <ListTitle title="Usuários" />
      </TitleContainer>
      <List>
        {['Administradores'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}

Home.propTypes = {
  container: PropTypes.node.isRequired,
};
