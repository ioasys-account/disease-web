import React from 'react';
import { useDispatch } from 'react-redux';
import AuthPresentation from 'components/presentation/Auth';
import { Creators as AuthActions } from 'store/ducks/authReducer';

export default function Auth() {
  const dispatch = useDispatch();

  const requestAuthAuthentication = (payload) => {
    dispatch(AuthActions.authRequest(payload));
  };
  return (
    <AuthPresentation requestAuthAuthentication={requestAuthAuthentication} />
  );
}
