import { IconWrapperProps, IconWrapper } from './IconWrapper'

export const LogoutIcon = ({ width, height, fill }: IconWrapperProps) => {
  return (
    <IconWrapper
      fill={fill}
      width={width}
      height={height}
      viewbox="0 96 960 960"
    >
      <path
        fill={fill}
        d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621 444l43-43 176 176-174 174Z"
      />
    </IconWrapper>
  )
}
