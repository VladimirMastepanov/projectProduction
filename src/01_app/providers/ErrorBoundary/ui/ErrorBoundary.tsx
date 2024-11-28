// import React from 'react';
// import { ErrorInfo, ReactNode } from 'react';

// interface ErrorBoundaryProps {
//   children: ReactNode;
// }
// interface ErrorBoundaryState {
//   hasError: boolean;
// }
// class ErrorBoundary extends React.Component<
//   ErrorBoundaryProps,
//   ErrorBoundaryState
// > {
//   constructor(props: ErrorBoundaryProps) {
//     super(props);
//     this.state = { hasError: false };
//   }
//   static getDerivedStateFromError(error: Error) {
//     return { hasError: true };
//   }
//   componentDidCatch(error: Error, errorInfo: ErrorInfo) {
//     console.log(error, errorInfo);
//   }
//   render() {
//     const { hasError } = this.state;
//     const { children } = this.props;
//     if (hasError) {
//       return <h1>Something went wrong.</h1>;
//     }
//     return children;
//   }
// }
// export default ErrorBoundary;
import { ErrorPage } from '03_widgets/ErrorPage/ui/ErrorPage';
import { PageLoader } from '03_widgets/PageLoader/PageLoader';
import React, { ReactNode, useState, useEffect, Suspense } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  // Error boundary logic using try-catch in a side-effect
  const handleError = (error: Error) => {
    console.error('Error caught in ErrorBoundary:', error);
    setHasError(true);
  };

  // Fallback UI when an error occurs
  const renderFallback = () => {
    return (
      <Suspense fallback="">
        <ErrorPage />
      </Suspense>
    );
  };

  useEffect(() => {
    // Simulate catching an error with useEffect
    const errorHandler = (error: ErrorEvent) => {
      handleError(error.error);
    };

    // Attach global error listener (optional, depending on use case)
    window.addEventListener('error', errorHandler);

    return () => {
      // Cleanup listener on component unmount
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  // If error occurred, render fallback UI
  if (hasError) {
    return renderFallback();
  }

  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
};

export default ErrorBoundary;
