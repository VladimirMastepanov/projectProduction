import { Loader } from '06_shared/ui/Loader/Loader';
import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Loader />
      {t('mainPage')}
    </div>
  );
};

export default MainPage;
