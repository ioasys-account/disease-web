import React from 'react';
import Menu from 'components/presentation/Menu';
import PageHeader from 'components/core/PageHeader';
import ConditionsForm from 'components/presentation/ConditionsForm';
import ConditionsList from 'components/presentation/ConditionsList';

const Conditions = () => (
  <>
    <PageHeader
      title="Condições Pré-Existentes - Cadastro"
    />
    <Menu />
    <ConditionsForm />
  </>
);

export default Conditions;
