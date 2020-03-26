import React from 'react';
import PropTypes from 'prop-types';

import { ContainerTitle } from './stylesTitle';

const ListTitle = ({ title }) => (

  <ContainerTitle>
    { title }
  </ContainerTitle>

);

ListTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ListTitle;
