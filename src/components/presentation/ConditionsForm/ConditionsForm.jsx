import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { ContainerForm } from './CondFormStyle';


const ConditionsForm = () => {
  const useStyles = makeStyles({
    root: {
      '& .MuiButton-root': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginTop: 100,
        marginLeft: 50,
      },
      '& .MuiButton-containedSecondary': {
        backgroundColor: '#DA1F26',
      },
    },
  })();
  return (
    <>
      <ContainerForm role="form">
        <input id="description" placeholder="Adicione uma condição pré-existente" />
        <div className={useStyles.root}>
          <Button
            variant="contained"
            color="secondary"
            className={useStyles.button}
            startIcon={<AddCircleOutlineIcon />}
          >
            Adicionar
          </Button>
        </div>
        <div className={useStyles.root}>
          <Button
            variant="contained"
            color="secondary"
            className={useStyles.button}
            startIcon={<DeleteIcon />}
          >
            Remover
          </Button>
        </div>
      </ContainerForm>

    </>
  );
};
export default ConditionsForm;
