import React from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import type { ReactNode } from 'react';
import i18nextForTest from '../../../config/i18n/i18nextForTest';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from '01_app/providers/StoreProvider';

export interface componentRenderOptions {
  route?: string;
  initialState?: Partial<StateSchema>;
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  const { route = '/', initialState } = options;

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nextForTest}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
}
