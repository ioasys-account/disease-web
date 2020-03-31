import React from 'react';
import PropTypes from 'prop-types';
import { ContainerHeader, HeaderItem } from './PageHeaderStyle';

const PageHeader = ({ title, color, textColor }) => (
  <ContainerHeader style={{ backgroundColor: color }}>
    <HeaderItem>
      <h3 style={{ color: textColor }}>{title}</h3>
    </HeaderItem>
  </ContainerHeader>
);

PageHeader.propTypes = {
  textColor: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
};

PageHeader.defaultProps = {
  textColor: '#FFFFFF',
  title: '',
  color: '#DA1F26',
};

export default PageHeader;
