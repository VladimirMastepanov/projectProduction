import React from 'react';
import { classNames } from '06_shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from '06_shared/ui/Button/Button';
import { Input } from '06_shared/ui/Input/Input';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className = '' }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input autofocus type="text" className={cls.input} placeholder={t('enter username')} />
      <Input type="text" className={cls.input} placeholder={t('enter password')} />
      <Button className={cls.loginBtn}>{t('enter')}</Button>
    </div>
  );
};
