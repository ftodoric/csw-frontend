import { IconProps, IconWrapper } from './IconWrapper'

export const IconAttack = ({ width, height, fill }: IconProps) => {
  return (
    <IconWrapper
      fill={fill}
      width={width}
      height={height}
      viewbox="0 96 960 960"
    >
      <path d="M769 968 645 844l-88 88-43-43q-17-17-17-42t17-42l199-199q17-17 42-17t42 17l43 43-88 88 123 124q9 9 9 21t-9 21l-64 65q-9 9-21 9t-21-9Zm111-636L427 785l19 20q17 17 17 42t-17 42l-43 43-88-88-124 124q-9 9-21 9t-21-9l-65-65q-9-9-9-21t9-21l124-124-88-88 43-43q17-17 42-17t42 17l20 19 453-453h160v160ZM320 488l38-38 38-38-38 38-38 38Zm-42 42L80 332V172h160l198 198-42 42-181-180h-75v75l180 181-42 42Zm105 212 437-435v-75h-75L308 667l75 75Zm0 0-37-38-38-37 38 37 37 38Z" />
    </IconWrapper>
  )
}
