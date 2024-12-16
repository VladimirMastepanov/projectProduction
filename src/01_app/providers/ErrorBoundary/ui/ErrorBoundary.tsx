import { ErrorPage } from '03_widgets/ErrorPage';
import { PageLoader } from '03_widgets/PageLoader';
import React, { ReactNode, useState, useEffect, Suspense } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (error: Error) => {
    console.error('Error caught in ErrorBoundary:', error);
    setHasError(true);
  };

  const renderFallback = () => {
    return (
      <Suspense fallback="">
        <ErrorPage />
      </Suspense>
    );
  };

  useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      handleError(error.error);
    };

    window.addEventListener('error', errorHandler);

    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  if (hasError) {
    return renderFallback();
  }

  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
};

export default ErrorBoundary;
