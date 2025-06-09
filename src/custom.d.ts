declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.jpeg" {
  const value: string;
  export default value;
}
declare module "*.gif" {
  const value: string;
  export default value;
}
declare module "*.bmp" {
  const value: string;
  export default value;
}
declare module "*.webp" {
  const value: string;
  export default value;
}
declare module "*.ico" {
  const value: string;
  export default value;
}
declare module "*.avif" {
  const value: string;
  export default value;
}
declare module "*.tiff" {
  const value: string;
  export default value;
}
declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}
declare module "*.svg?react" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
