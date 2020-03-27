import React from 'react';
import TextFieldInput from 'components/core/TextFieldInput';
import ButtonDefault from 'components/core/ButtonDefault';
import CoronaImg from 'assets/img/corona.png';
import {
  Container, Body, SubmitRow, ImgLogo,
} from './stylesAuth';

export default function Auth({ requestAuthAuthentication }) {
  return (
    <Body>
      <Container>
        <ImgLogo src={CoronaImg} />
        <TextFieldInput label="Email" fullWidth />
        <TextFieldInput label="Senha" fullWidth />
        <SubmitRow>
          <ButtonDefault onClick={requestAuthAuthentication} value="Login" />
        </SubmitRow>
      </Container>
    </Body>
  );
}
