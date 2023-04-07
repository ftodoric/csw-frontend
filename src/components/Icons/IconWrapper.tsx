import React from 'react'

export interface IconProps {
  width?: string
  height?: string
  viewbox?: string
  fill?: string
}

export const IconWrapper = ({
  width,
  height,
  viewbox = `0 0 ${width} ${height}`,
  fill,
  children,
}: React.PropsWithChildren<IconProps>) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox={viewbox}
      enableBackground={`new ${viewbox}`}
      xmlSpace="preserve"
      fill={fill}
    >
      {children}
    </svg>
  )
}
