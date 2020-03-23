import React from 'react';
import { Container, Body, SubmitRow, ImgLogo } from './stylesAuth';
import TextFieldInput from '../../core/TextFieldInput';
import ButtonDefault from '../../core/ButtonDefault';
import CoronaImg from '../../../assets/img/corona.png';

export default function Auth({ requestAuthAuthentication }) {
  return (
    <Body>
      <Container>
        <ImgLogo src={CoronaImg} />
        <TextFieldInput label="Login" fullWidth />
        <TextFieldInput label="Senha" fullWidth />
        <SubmitRow>
          <ButtonDefault onClick={requestAuthAuthentication} value="Login" />
        </SubmitRow>
      </Container>
    </Body>
  );
}
