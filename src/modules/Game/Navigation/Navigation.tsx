import {
  IconAbstain,
  IconAttack,
  IconBlackMarket,
  IconDistribute,
  IconRevitalise,
} from '@components/Icons'

import * as S from './styles'

export const Navigation = () => {
  return (
    <S.NavigationContainer>
      <div style={{ width: '150px', height: '100%' }}></div>

      <S.NavigationActions>
        <S.ActionButtonWrapper
          bgColor="rgb(240, 234, 175)"
          title="Distribute"
          onClick={() => console.log('clicked')}
          disabled
        >
          <IconDistribute height="100%" fill="rgb(135, 119, 37)" />
        </S.ActionButtonWrapper>

        <S.ActionButtonWrapper bgColor="rgb(178, 204, 215)" title="Revitalise">
          <IconRevitalise height="100%" fill="rgb(16, 88, 129)" />
        </S.ActionButtonWrapper>

        <S.ActionButtonWrapper bgColor="rgba(190, 64, 55, 0.4)" title="Attack">
          <IconAttack height="100%" fill="rgb(143, 75, 70)" />
        </S.ActionButtonWrapper>

        <S.ActionButtonWrapper bgColor="rgb(237, 204, 157)" title="Abstain">
          <IconAbstain height="100%" fill="rgb(176, 128, 61)" />
        </S.ActionButtonWrapper>

        {true && (
          <S.ActionButtonWrapper bgColor="rgb(68, 68, 68)" title="Black Market">
            <IconBlackMarket height="100%" fill="rgb(183, 183, 183)" />
          </S.ActionButtonWrapper>
        )}
      </S.NavigationActions>

      <div style={{ width: '150px', height: '100%' }}></div>
    </S.NavigationContainer>
  )
}
