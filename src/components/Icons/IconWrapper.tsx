import React from 'react';

export interface IconWrapperProps {
  fill?: string;
  width?: string;
  height?: string;
  viewbox?: string;
}

export const IconWrapper = ({
  fill,
  width,
  height,
  viewbox = `0 0 ${width} ${height}`,
  children,
}: React.PropsWithChildren<IconWrapperProps>) => {
  return (
    <svg
      version="1.1"
      id="L7"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox={viewbox}
      enableBackground={`new ${viewbox}`}
      xmlSpace="preserve"
      fill={fill}
      width={width}
      height={height}
    >
      {children}
    </svg>
  );
};
