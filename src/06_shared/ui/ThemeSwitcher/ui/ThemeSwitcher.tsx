import { classNames } from "06_shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from "01_app/providers/ThemeProvider";
import DarkIcon from '06_shared/assets/icons/DarkIcon.svg';
import LightIcon from '06_shared/assets/icons/LightIcon.svg';
import { Button, ThemeButton } from "06_shared/ui/Button/Button/Button";



interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className = '' }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon width={30} height={30} /> : <LightIcon width={30} height={30} />}
    </Button>
  )
}