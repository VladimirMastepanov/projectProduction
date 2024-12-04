import React from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import type { ReactNode } from 'react';
import i18nextForTest from '../../../config/i18n/i18nextForTest';
import { MemoryRouter } from 'react-router-dom';

export interface componentRenderOptions {
  route?: string;
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  const { route = '/' } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nextForTest}>{component}</I18nextProvider>,
    </MemoryRouter>,
  );
}
