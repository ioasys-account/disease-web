import React from 'react';
import Button from '@material-ui/core/Button';

export default function ButtonDefault({ value, onClick, color }) {
  return (
    <Button variant="outlined" color={color || 'primary'} onClick={onClick}>
      {value}
    </Button>
  );
}
