import React from 'react';
import { classNames } from '06_shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { PropsWithChildren, useState } from 'react';
import { ThemeSwitcher } from '06_shared/ui/ThemeSwitcher';
import { LangSwitcher } from '06_shared/ui/LangSwitcher';
import { Button } from '06_shared/ui/Button/Button';

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: PropsWithChildren<SidebarProps>) => {
  const { className = '' } = props;

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button data-testid="sidebar-toggle" onClick={onToggle}>toggle</Button>
      <div className={cls.switcher}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
