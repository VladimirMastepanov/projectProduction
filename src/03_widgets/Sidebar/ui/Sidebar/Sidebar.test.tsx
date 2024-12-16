import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import cls from './Sidebar.module.scss';
import { componentRender } from '06_shared/lib/tests/componentRender/componentRender';

describe('Sidebar', () => {
  test('Button text', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    componentRender(<Sidebar />);
    const togglBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar')).not.toHaveClass(cls.collapsed);
    fireEvent.click(togglBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass(cls.collapsed);
  });
});
