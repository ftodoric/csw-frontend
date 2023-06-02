import { IconProps, IconWrapper } from './IconWrapper'

export const IconInventory = ({ width, height, fill }: IconProps) => {
  return (
    <IconWrapper fill={fill} width={width} height={height} viewbox="0 -960 960 960">
      <path d="M120-142v-492q-14-2-27-20t-13-39v-127q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880-820v127q0 21-13 39t-27 20v492q0 23-18.5 42.5T780-80H180q-24 0-42-19.5T120-142Zm60-491v493h600v-493H180Zm640-60v-127H140v127h680ZM360-423h240v-60H360v60ZM180-140v-493 493Z" />
    </IconWrapper>
  )
}
