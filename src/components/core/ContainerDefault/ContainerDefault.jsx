import React from 'react';
import PropTypes from 'prop-types';
import Container from './ContainerDefaultStyle';

const ContainerDefault = ({ children }) => <Container>{children}</Container>;

ContainerDefault.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContainerDefault;
