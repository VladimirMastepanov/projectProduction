import React from 'react';
import { classNames } from '06_shared/lib/classNames/classNames';
import { Theme, useTheme } from '01_app/providers/ThemeProvider';
import DarkIcon from '06_shared/assets/icons/DarkIcon.svg';
import LightIcon from '06_shared/assets/icons/LightIcon.svg';
import { Button, ThemeButton } from '06_shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className = '' }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? (
        <DarkIcon width={30} height={30} />
      ) : (
        <LightIcon width={30} height={30} />
      )}
    </Button>
  );
};
