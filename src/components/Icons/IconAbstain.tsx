import { IconProps, IconWrapper } from './IconWrapper'

export const IconAbstain = ({ width, height, fill }: IconProps) => {
  return (
    <IconWrapper
      fill={fill}
      width={width}
      height={height}
      viewbox="0 96 960 960"
    >
      <path d="m255 815-42-42 198-198-198-198 42-42 240 240-240 240Zm253 0-42-42 198-198-198-198 42-42 240 240-240 240Z" />
    </IconWrapper>
  )
}
