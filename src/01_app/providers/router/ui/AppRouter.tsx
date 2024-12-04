import React from "react";
import { routeConfig } from "06_shared/config/routeConfig/routeConfig";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "03_widgets/PageLoader/ui/PageLoader";

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};
