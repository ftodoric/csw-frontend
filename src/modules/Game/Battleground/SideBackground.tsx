import { TeamSide } from '@types'

interface SideBackgroundProps {
  side: TeamSide
  mySide?: boolean
}

export const SideBackground = ({ side, mySide }: SideBackgroundProps) => {
  const isBlueTeam = side === TeamSide.Blue

  const lowerTeamAreaPath = 'M0 100 L100 100 L50 10 z'
  const lowerTeamBorderPath = 'M100 100 L50 10 L0 100'

  const upperTeamAreaPath = 'M0 0 L100 0 L50 90 z'
  const upperTeamBorderPath = 'M100 0 L50 90 L0 0'

  return (
    <svg
      width="100%"
      height="50%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ display: 'block' }}
    >
      <path
        d={mySide ? lowerTeamAreaPath : upperTeamAreaPath}
        fill={
          isBlueTeam ? 'rgba(48, 141, 193, 0.18)' : 'rgba(190, 64, 55, 0.4)'
        }
      />
      <path
        d={mySide ? lowerTeamBorderPath : upperTeamBorderPath}
        stroke={isBlueTeam ? '#222281' : 'firebrick'}
        strokeWidth="0.1px"
        strokeDasharray="0.5 0.5"
        fill="none"
      />
    </svg>
  )
}
