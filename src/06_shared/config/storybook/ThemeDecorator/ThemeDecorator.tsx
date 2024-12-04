import React from "react";
import "../../../../01_app/styles/index.scss";
import { Theme } from "01_app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (Story: React.FC) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
);
