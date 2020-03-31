import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Creators as AuthActions } from 'store/ducks/authReducer';
import {
  Divider, Drawer, List, ListItem,
} from '@material-ui/core';
import ListTitle from 'components/core/ListTitle';
import LogoutLink from 'components/presentation/LogoutLink';
import { makeStyles } from '@material-ui/core/styles';
import urls from 'utils/constants/urls';
import LinkCustom from 'components/core/LinkCustom';
import ImgIcon from 'assets/img/logo.png';
import {
  TitleContainer, LogoIcon, UserNameContainer, Container,
} from './MenuStyle';

const Menu = () => {
  const [userName, setUsername] = useState('José Eustáquio');
  const dispatch = useDispatch();
  const materialStyles = makeStyles({
    root: {
      display: 'flex',
      '& .MuiListItem-gutters': {
        fontSize: 14,
        paddingLeft: 28,
        fontWeight: 500,
        lineHeight: '30px',
        '&:hover': {
          backgroundColor: 'rgba(204, 54, 50, 0.1)',
          color: '#CC3632',
        },
      },
    },
  })();

  const logoutUser = (payload) => {
    dispatch(AuthActions.authLogOut(payload));
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUsername({ userName: user.fullName });
    }
  }, []);

  const menuItems = [
    {
      title: '',
      items: [
        { label: 'Inicial', link: urls.LINKS.HOME },
        { label: 'Perfis', link: urls.LINKS.PROFILE },
        { label: 'Médicos', link: urls.LINKS.DOCTORS },
      ],
    },
    {
      title: 'Saúde',
      items: [
        { label: 'Condições Pré-existentes', link: urls.LINKS.CONDITIONS },
        { label: 'Sintomas', link: urls.LINKS.SYMPTOMS },
      ],
    },
    {
      title: 'Usuários',
      items: [{ label: 'Administradores', link: urls.LINKS.ADMINS }],
    },
  ];

  return (
    <nav className={materialStyles.root}>
      <Drawer classes={materialStyles.drawerPaper} variant="permanent" open>
        <LogoIcon src={ImgIcon} />
        <Container>
          <UserNameContainer>
            <span>
              {userName}
            </span>
          </UserNameContainer>
          <LogoutLink logoutUser={logoutUser} />
        </Container>
        <Divider />
        {menuItems.map(({ title, items }) => (
          <List key={title}>
            {title.length > 0 && (
              <TitleContainer>
                <ListTitle title={title} />
              </TitleContainer>
            )}
            {items.map(({ label, link }) => (
              <ListItem
                key={label}
                value={label}
                variant="menu"
              >
                <LinkCustom route={link}>{label}</LinkCustom>
              </ListItem>
            ))}
            <Divider />
          </List>
        ))}
      </Drawer>
    </nav>
  );
};

export default Menu;
