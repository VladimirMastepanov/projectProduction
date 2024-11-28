import React from 'react';
import { classNames } from '06_shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    className = '',
    children,
    theme = ThemeButton.CLEAR,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
