import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { LinkButton } from './LinkCustomStyle';

const LinkCustom = ({ route, children, history }) => {
  const handleKeyUp = (keyCode) => {
    if (keyCode === 13) {
      history.push(route);
    }
  };

  return (
    <LinkButton
      role="button"
      tabIndex={0}
      onKeyUp={(e) => {
        handleKeyUp(e.keyCode);
      }}
      onClick={() => {
        history.push(route);
      }}
    >
      {children}
    </LinkButton>
  );
};

LinkCustom.propTypes = {
  route: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default withRouter(LinkCustom);
