import React from 'react';
import { classNames } from '06_shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    className = '',
    children,
    theme,
    square = false,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const moods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
  };

  return (
    <button
      className={classNames(cls.Button, moods, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
