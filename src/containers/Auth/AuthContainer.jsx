import React from 'react';
import AuthPresentation from '../../componentes/presentation/Auth';
import { Creators as AuthActions } from '../../store/ducks/authReducer';
import { useDispatch } from 'react-redux';

export default function Auth() {
  const dispatch = useDispatch();

  const requestAuthAuthentication = (payload) => {
    dispatch(AuthActions.authRequest(payload));
  };
  return (
    <AuthPresentation requestAuthAuthentication={requestAuthAuthentication} />
  );
}
