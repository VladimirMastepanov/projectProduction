import './styles/index.scss';
import { Link } from "react-router-dom";
import { useTheme } from '01_app/providers/ThemeProvider';
import { classNames } from '06_shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from '03_widgets/Navbar';


const App = () => {

  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>

      <Navbar />
      <AppRouter />

    </div>
  )
};

export default App;
