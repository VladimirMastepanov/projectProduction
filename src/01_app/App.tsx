import React from 'react';
import './styles/index.scss';
import { useTheme } from '01_app/providers/ThemeProvider';
import { classNames } from '06_shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from '03_widgets/Navbar';
import { Sidebar } from '03_widgets/Sidebar';
import { Suspense } from 'react';

const App = () => {
  const { theme } = useTheme();

  // useEffect(() => {
  //   throw new Error();
  // }, []);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
