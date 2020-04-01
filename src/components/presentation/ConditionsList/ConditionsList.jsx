import React from 'react';
import { ContainerList } from './CondListStyle';

const ConditionsList = ({ onChange, onDelete, value }) => (
  <ContainerList>
    <input
      value={value}
      onChange={onChange}
    />

  </ContainerList>

);
export default ConditionsList;
