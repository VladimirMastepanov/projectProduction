import React from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import type { ReactNode } from 'react';
import i18nextForTest from '../../../config/i18n/i18nextForTest';

export function renderWithTranslation(component: ReactNode) {
  return render(<I18nextProvider i18n={i18nextForTest}>{component}</I18nextProvider>);
}
