import React, { memo, useCallback} from 'react';
import { classNames } from '06_shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '06_shared/ui/Button/Button';
import { Input } from '06_shared/ui/Input/Input';
import { useSelector} from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from '06_shared/ui/Text/Text';
import { useAppDispatch } from '01_app/providers/StoreProvider';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { DynemicModuleLoader, ReducersList } from '06_shared/lib/components/DynemicModuleLoader';

export interface LoginFormProps {
  className?: string;
}

const initialRedusers: ReducersList = {
  loginForm: loginReducer,
}

const LoginForm = memo(({ className = '' }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginLoading);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(
    () => dispatch(loginByUsername({ username, password })),
    [dispatch, username, password]
  );

  return (
    <DynemicModuleLoader reducers={initialRedusers} removeAfterUnmount={true}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('auth form')} />
        {error && <Text text={error} theme={TextTheme.ERROR} />}
        <Input
          value={username}
          onChange={onChangeUsername}
          autofocus
          type='text'
          className={cls.input}
          placeholder={t('enter username')}
        />
        <Input
          value={password}
          onChange={onChangePassword}
          type='text'
          className={cls.input}
          placeholder={t('enter password')}
        />
        <Button
          onClick={onLoginClick}
          theme={ButtonTheme.OUTLINE}
          className={cls.loginBtn}
          disabled={isLoading}
        >
          {t('enter')}
        </Button>
      </div>
    </DynemicModuleLoader>
  );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm;
