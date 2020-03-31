import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles, lighten } from '@material-ui/core/styles';
import {
  Toolbar, Typography, Tooltip,
  IconButton,
} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

const TableToolbar = ({ numSelected }) => {
  const classes = makeStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
        : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
    title: {
      fontWeight: 'bold',
      flex: '1 1 100%',
    },
  }))();

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          Registros selecionados :
          {' '}
          {numSelected}
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h5"
          id="tableTitle"
          component="div"
        >
          Perfis Cadastrados
        </Typography>
      )}

      <Tooltip title="Filter list">
        <IconButton aria-label="filter list">
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};

TableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default TableToolbar;
