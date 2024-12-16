import React from 'react';
import '../../../../01_app/styles/index.scss';

export const StyleDecorator = (Story: React.FC) => {
  return (
    <div style={{}}>
      <Story />
    </div>
  );
};
