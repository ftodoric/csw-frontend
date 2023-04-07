import { IconProps, IconWrapper } from './IconWrapper'

export const IconPlay = ({ width, height, fill }: IconProps) => {
  return (
    <IconWrapper
      fill={fill}
      width={width}
      height={height}
      viewbox="0 96 960 960"
    >
      <path d="M320 853V293l440 280-440 280Zm60-280Zm0 171 269-171-269-171v342Z" />
    </IconWrapper>
  )
}
