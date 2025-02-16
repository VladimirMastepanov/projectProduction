import React from 'react';
import cls from './ErrorPage.module.scss';
import { classNames } from '06_shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button } from '06_shared/ui/Button/Button';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className = '' }: ErrorPageProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.ErrorPage, {}, [className])}>
      <p>{t('something went wrong')}</p>
      <Button onClick={reloadPage}>{t('reload page')}</Button>
    </div>
  );
};
