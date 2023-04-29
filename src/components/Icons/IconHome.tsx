import { IconProps, IconWrapper } from './IconWrapper'

export const IconHome = ({ width, height, fill }: IconProps) => {
  return (
    <IconWrapper fill={fill} width={width} height={height} viewbox="0 96 960 960">
      <path d="M220 876h150V626h220v250h150V486L480 291 220 486v390Zm-60 60V456l320-240 320 240v480H530V686H430v250H160Zm320-353Z" />
    </IconWrapper>
  )
}
