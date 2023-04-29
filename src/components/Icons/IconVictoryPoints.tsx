import { IconProps, IconWrapper } from './IconWrapper'

export const IconVictoryPoints = ({ width, height, fill }: IconProps) => {
  return (
    <IconWrapper
      fill={fill}
      width={width}
      height={height}
      viewbox="0 96 960 960"
    >
      <path d="M280 176h400v333q0 23-11.5 42T637 582l-141 82 26 97h134l-109 81 42 134-109-81-110 81 42-134-109-81h135l25-97-140-82q-20-12-31.5-31T280 509V176Zm174 60v350l30 16 30-16V236h-60Z" />
    </IconWrapper>
  )
}
