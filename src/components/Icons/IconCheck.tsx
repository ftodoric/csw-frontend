import { IconProps, IconWrapper } from './IconWrapper'

export const IconCheck = ({ width, height, fill }: IconProps) => {
  return (
    <IconWrapper fill={fill} width={width} height={height} viewbox="0 96 960 960">
      <path d="M378 834 130 586l68-68 180 180 383-383 68 68-451 451Z" />
    </IconWrapper>
  )
}
