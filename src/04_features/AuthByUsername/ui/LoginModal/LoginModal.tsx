import React, { Suspense } from 'react';
import { classNames } from '06_shared/lib/classNames/classNames';
import { Modal } from '06_shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Loader } from '06_shared/ui/Loader/Loader';

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const { className = '', isOpen = false, onClose } = props;

  return (
    <Modal className={classNames('', {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
