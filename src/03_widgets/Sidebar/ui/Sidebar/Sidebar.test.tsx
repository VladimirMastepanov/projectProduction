import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderWithTranslation } from '06_shared/lib/tests/renderWithTranslation/renderWithTranslation';
import cls from './Sidebar.module.scss';

describe('Sidebar', () => {
  test('Button text', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    renderWithTranslation(<Sidebar />);
    const togglBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar')).not.toHaveClass(cls.collapsed);
    fireEvent.click(togglBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass(cls.collapsed);
  });
});
