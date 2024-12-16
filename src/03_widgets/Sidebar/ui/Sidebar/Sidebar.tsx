import React from 'react';
import { classNames } from '06_shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { PropsWithChildren, useState } from 'react';
import { ThemeSwitcher } from '06_shared/ui/ThemeSwitcher';
import { LangSwitcher } from '06_shared/ui/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from '06_shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from '06_shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from '06_shared/config/routeConfig/routeConfig';
import AboutIcon from '06_shared/assets/icons/AboutIcon.svg';
import MainIcon from '06_shared/assets/icons/MainIcon.svg';

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: PropsWithChildren<SidebarProps>) => {
  const { className = '' } = props;

  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={cls.item}>
          <MainIcon className={cls.icon} />
          <span className={cls.link}> {t('main')}</span>
        </AppLink>

        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={cls.item}>
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t('about')}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
};
