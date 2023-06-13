import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconLinkExternal = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("c-pieIcon c-pieIcon--link-external", className, iconSize, "IconLinkExternal");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" fill="currentColor" viewBox="0 0 16 16"    {...allProps}><path d="M13.25 3.564 8.21 8.63l-.928-.928 5.093-5.066H9.662V1.324h3.833a1.093 1.093 0 0 1 1.067 1.093V6.25H13.25V3.564Z" /><path d="M11.302 12.831c.343-.34.537-.804.54-1.287V7.598h1.312v3.946a3.141 3.141 0 0 1-3.142 3.132h-5.46a3.141 3.141 0 0 1-3.14-3.132V6.075a3.132 3.132 0 0 1 3.14-3.132h3.79v1.312h-3.79a1.829 1.829 0 0 0-1.802 1.82v5.469a1.829 1.829 0 0 0 1.802 1.82h5.46c.484 0 .948-.192 1.29-.533Z" /></svg>;
};
export default IconLinkExternal;