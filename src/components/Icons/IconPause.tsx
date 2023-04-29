import { IconProps, IconWrapper } from './IconWrapper'

export const IconPause = ({ width, height, fill }: IconProps) => {
  return (
    <IconWrapper fill={fill} width={width} height={height} viewbox="0 96 960 960">
      <path d="M525 856V296h235v560H525Zm-325 0V296h235v560H200Zm385-60h115V356H585v440Zm-325 0h115V356H260v440Z" />
    </IconWrapper>
  )
}
