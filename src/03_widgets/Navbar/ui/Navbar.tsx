import { classNames } from "06_shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from "06_shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "06_shared/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {

  return (
    <div className={classNames(cls.navbar, {}, [])}>
      <ThemeSwitcher />

      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainlink}>
          main
        </AppLink>
        <AppLink to={'/about'}>
          about
        </AppLink>
      </div>

    </div>
  )
}
