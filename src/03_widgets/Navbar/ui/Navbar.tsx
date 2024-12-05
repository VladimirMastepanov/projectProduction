import React, { useCallback, useState } from "react";
import { classNames } from "06_shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "06_shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { Modal } from '06_shared/ui/Modal/Modal';
import { Button, ButtonTheme } from '06_shared/ui/Button/Button';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = "" }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])


  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button onClick={onToggleModal} theme={ButtonTheme.CLEAR_INVERTED} className={cls.links}>
        {t('Enter')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal} >Some content for modal window</Modal>
    </div>
  );
};
