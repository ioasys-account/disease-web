import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { ContainerLink } from './LogoutStyle';

const LogoutLink = ({ route, logoutUser, history }) => {
  const handleOnKeyUp = (keyCode) => {
    if (keyCode === 13) {
      history.push(route);
    }
  };
  return (
    <ContainerLink>
      <span
        role="button"
        tabIndex={0}
        onKeyUp={(e) => {
          handleOnKeyUp(e.keyCode);
        }}
        onClick={logoutUser}
      >
        Sair
      </span>
    </ContainerLink>
  );
};

LogoutLink.propTypes = {
  route: PropTypes.string.isRequired,
  logoutUser: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default withRouter(LogoutLink);
