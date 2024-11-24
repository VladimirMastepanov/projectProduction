import { AboutPage } from "02_pages/AboutPage";
import { MainPage } from "02_pages/MainPage";
import { routeConfig } from "06_shared/config/routeConfig/routeConfig";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>

      <Routes>

        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={element}
          />
        ))}
      </Routes>

    </Suspense>

  )
};
