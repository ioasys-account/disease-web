import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  Checkbox,
} from '@material-ui/core';
import ContainerDefault from 'components/core/ContainerDefault';
import Menu from 'components/presentation/Menu';
import TableToolbar from 'components/core/TableToolbar';
import TableHeader from 'components/core/TableHeader';

const profiles = [
  {
    id: 1,
    name: 'Paloma',
    birthday: '19931016',
    gerend: 'femele',
    conditions: ['Tosse seca', 'febre'],
  },
  {
    id: 2,
    name: 'Daniel',
    birthday: '19931016',
    gerend: 'male',
    conditions: ['Tosse seca', 'febre'],
  },
  {
    id: 3,
    name: 'Ermelinda',
    birthday: '19931016',
    gerend: 'femele',
    conditions: ['Tosse seca', 'febre'],
  },
  {
    id: 4,
    name: 'John',
    birthday: '19931016',
    gerend: 'male',
    conditions: ['Tosse seca', 'febre'],
  },
];

const headCells = [
  {
    id: 'name',
    label: 'Nome Completo',
  },
  {
    id: 'birthday',
    label: 'Data de Nascimento',
  },
  {
    id: 'gerend',
    label: 'Gênero',
  },
  {
    id: 'conditions',
    label: 'Condições',
  },
];

const Profile = () => {
  const classes = makeStyles({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  })();
  const styleRow = makeStyles({
    root: {
      cursor: 'pointer',
    },
  })();
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const isSelected = (id) => selected.indexOf(id) !== -1;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, profiles.length - page * rowsPerPage);

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <ContainerDefault>
      <Menu />
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <TableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              className={classes.table}
              size="medium"
              aria-label="Perfis Cadastrados"
            >
              <TableHeader headCells={headCells} />
              <TableBody>
                {profiles
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((profile) => {
                    const isItemSelected = isSelected(profile.id);
                    return (
                      <TableRow
                        classes={styleRow}
                        hover
                        onClick={(event) => handleClick(event, profile.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={profile.id}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox checked={isItemSelected} />
                        </TableCell>
                        <TableCell align="left">{profile.name}</TableCell>
                        <TableCell align="left">{profile.birthday}</TableCell>
                        <TableCell align="left">{profile.gerend}</TableCell>
                        <TableCell align="left">
                          {profile.conditions.map((condition) => (`${condition}, `))}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={5} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10]}
            component="div"
            count={profiles.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </ContainerDefault>
  );
};

export default Profile;
