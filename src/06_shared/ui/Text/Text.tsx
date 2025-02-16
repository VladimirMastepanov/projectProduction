import React from 'react';
import { classNames } from '06_shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRYMARY = 'prymary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = (props: TextProps) => {
  const { className = '', text, title, theme = TextTheme.PRYMARY } = props;
  return (
    <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
