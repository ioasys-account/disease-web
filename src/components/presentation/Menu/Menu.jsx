import React, { useState } from 'react';
import {
  Divider, Drawer, List, ListItem,
} from '@material-ui/core';
import ListTitle from 'components/core/ListTitle';
import { makeStyles } from '@material-ui/core/styles';
import urls from 'utils/constants/urls';
import LinkCustom from 'components/core/LinkCustom';
import ImgIcon from 'assets/img/logo.png';
import { TitleContainer, LogoIcon } from './MenuStyle';

const Menu = () => {
  const [activeLink, setActiveLink] = useState('Inicial');
  const materialStyles = makeStyles({
    root: {
      display: 'flex',
      '& .MuiListItem-gutters': {
        fontSize: 14,
        paddingLeft: 28,
        fontWeight: 500,
        lineHeight: '30px',
        '&:first-child': {
          backgroundColor: 'rgba(204, 54, 50, 0.1)',
          color: '#CC3632',
        },
        '&:hover': {
          backgroundColor: 'rgba(204, 54, 50, 0.1)',
          color: '#CC3632',
        },
      },
    },
  })();

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
                selected={label === activeLink}
              >
                <LinkCustom route={link}>{label}</LinkCustom>
              </ListItem>
            ))}
            <Divider light />
          </List>
        ))}
      </Drawer>
    </nav>
  );
};

export default Menu;
