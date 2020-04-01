import React from 'react';
import Menu from 'components/presentation/Menu';
import PageHeader from 'components/core/PageHeader';
import ConditionsForm from 'components/presentation/ConditionsForm';
import ConditionsList from 'components/presentation/ConditionsList';

const Conditions = () => (
  <>
    <Menu />
    <PageHeader title="Condições Pré-Existentes Cadastradas" />
    <ConditionsForm />
    <ConditionsList />
  </>
);

export default Conditions;
