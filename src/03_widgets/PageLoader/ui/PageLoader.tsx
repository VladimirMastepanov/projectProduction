import React from 'react';
import { classNames } from '06_shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';
import { Loader } from '../../../06_shared/ui/Loader/Loader';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className = '' }: PageLoaderProps) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
