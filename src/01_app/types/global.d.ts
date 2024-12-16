import React, { SVGAttributes } from 'react';

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export = classes;
}

declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
// declare module '*.module.scss' {
//   const classes: { [key: string]: string };
//   export default classes;
// }

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}

declare global {
  const __IS_DEV__: boolean;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: React.HTMLAttributes<HTMLElement> | SVGAttributes<SVGAElement>;
    }
  }
}

export {};
