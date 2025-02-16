import React, { useEffect } from 'react';
import './styles/index.scss';
import { classNames } from '06_shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from '03_widgets/Navbar';
import { Sidebar } from '03_widgets/Sidebar';
import { Suspense } from 'react';
import { PageLoader } from '03_widgets/PageLoader';
import { useTheme } from './providers/ThemeProvider';
import { useDispatch } from 'react-redux';
import { userActions } from '05_entities/User';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
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
