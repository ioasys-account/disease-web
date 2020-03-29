import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Container } from './LogoutStyle';

const LogoutLink = ({ route, logoutUser, history }) => {
  const handleOnKeyUp = (keyCode) => {
    if (keyCode === 13) {
      history.push(route);
    }
  };
  return (
    <Container>
      <span
        role="button"
        tabIndex={0}
        style={{
          color: '#808080',
          cursor: 'pointer',
        }}
        onKeyUp={(e) => {
          handleOnKeyUp(e.keyCode);
        }}
        onClick={logoutUser}
      >
        Sair
      </span>
    </Container>
  );
};

LogoutLink.propTypes = {
  route: PropTypes.string.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default withRouter(LogoutLink);
