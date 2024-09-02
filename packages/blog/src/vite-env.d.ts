/// <reference types="vite/client" />

declare module '@images';
declare module '@colors';
declare module '@images/static_map_image.pgm';

declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
