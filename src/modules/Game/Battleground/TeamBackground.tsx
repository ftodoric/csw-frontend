import { TeamSide } from '@types'

interface TeamBackgroundProps {
  side: TeamSide
  // this flag is set on the lower component of the two
  userSide?: boolean
  isActive: boolean
}

export const TeamBackground = ({ side, userSide, isActive }: TeamBackgroundProps) => {
  const isBlueTeam = side === TeamSide.Blue

  const lowerTeamAreaPath = 'M0 100 L100 100 L50 10 z'
  const lowerTeamBorderPath = 'M100 100 L50 10 L0 100'

  const upperTeamAreaPath = 'M0 0 L100 0 L50 90 z'
  const upperTeamBorderPath = 'M100 0 L50 90 L0 0'

  const blueActivness = isActive ? 0.2 : 0.15
  const redActivness = isActive ? 0.4 : 0.3

  return (
    <svg width="100%" height="50%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ display: 'block' }}>
      <path
        d={userSide ? lowerTeamAreaPath : upperTeamAreaPath}
        fill={isBlueTeam ? `rgba(48, 141, 193, ${blueActivness})` : `rgba(190, 64, 55, ${redActivness})`}
      />
      <path
        d={userSide ? lowerTeamBorderPath : upperTeamBorderPath}
        stroke={isBlueTeam ? '#222281' : 'firebrick'}
        strokeWidth="0.1px"
        strokeDasharray="0.5 0.5"
        fill="none"
      />
    </svg>
  )
}
