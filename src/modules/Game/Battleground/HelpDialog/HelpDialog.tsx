import { useEffect } from 'react'

import { IconClose } from '@components/Icons'

import * as S from './styles'

interface HelpDialogProps {
  onClose: () => void
}

export const HelpDialog = ({ onClose }: HelpDialogProps) => {
  // Detect ESC keypress
  useEffect(() => {
    function handleEscape(event: any) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  return (
    <S.HelpDialogModal>
      <S.StickyHeader>
        <S.Title>Rules of the game</S.Title>
      </S.StickyHeader>

      <S.ModalBody>
        <S.Body>
          <S.Header>How to win the game?</S.Header>
          <S.Description>
            Earn more <span id="victory-points">Victory Points</span> than the opposing team.
          </S.Description>

          <S.Header>How the game is played?</S.Header>
          <S.Description>
            <S.Paragraph>
              Each Entity has two sets of counters it must manage: <span id="resource">Resource</span> (representing
              wealth) and <span id="vitality">Vitality</span> (representing well-being).
            </S.Paragraph>

            <S.Paragraph>The game lasts 12 turns: January - December 2020.</S.Paragraph>

            <S.Paragraph>
              A turn consists of one team performing Actions with all their Entities, after which the other team
              performs Actions with all their Entities.
            </S.Paragraph>

            <S.Paragraph>Each turn, each Entity may perform one of five courses of Action:</S.Paragraph>

            <S.UnorderedList>
              <S.ListItem>
                Distribute - transfer <span id="resource">Resource</span> to any single connected Entity
              </S.ListItem>

              <S.ListItem>
                Revitalise - spend <span id="resource">Resource</span> to gain <span id="vitality">Vitality</span>
              </S.ListItem>

              <S.ListItem>
                Attack - spend <span id="resource">Resource</span> to attack along an attack vector (note: Teams may not
                attack in January)
              </S.ListItem>

              <S.ListItem>(GCHQ / SCS ONLY) Access Black Market - bid on black market goods</S.ListItem>

              <S.ListItem>Abstain - do nothing this turn</S.ListItem>
            </S.UnorderedList>
          </S.Description>

          <S.Header>Details</S.Header>
          <S.Description>
            <S.Paragraph>
              At the start of every Month a card is drawn from the Event Cards pile and its effects implemented
              immediately.
            </S.Paragraph>

            <S.Paragraph>
              {`At the start of each team's turn, the Government Entity is granted`}{' '}
              <span id="resource">3 Resource.</span>
            </S.Paragraph>

            <S.Paragraph>
              There is a time limit per team each turn. Any actions not performed within this limit are forfeited.
            </S.Paragraph>

            <S.Paragraph>
              Record log is being kept throughout the game. And the message log is available in the lower left corner of
              the game session.
            </S.Paragraph>
          </S.Description>

          <S.Header>
            <span id="resource">Distribute</span>
          </S.Header>
          <S.Description>
            <S.Paragraph>Resources can be transferred between Entities connected by thin grey lines.</S.Paragraph>

            <S.Paragraph>Arrows denote one-way transfer relationships.</S.Paragraph>

            <S.Paragraph>
              The maximum number of <span id="resource">Resource</span> that can be transferred in one Action is 5.
            </S.Paragraph>

            <S.Paragraph>
              There is no limit on how much <span id="resource">Resource</span> an Entity can possess.
            </S.Paragraph>
          </S.Description>

          <S.Header>
            <span id="vitality">Revitalise</span>
          </S.Header>
          <S.Description>
            <S.Paragraph>
              Cost of <span id="vitality">Vitality</span> goes up with the amount converted:
            </S.Paragraph>

            <table id="revitalise">
              <tr>
                <th id="vitality">Vitality</th>
                <th id="resource">Cost (Resource)</th>
              </tr>
              <tr>
                <td id="vitality">1</td>
                <td>1</td>
              </tr>
              <tr>
                <td id="vitality">2</td>
                <td>2</td>
              </tr>
              <tr>
                <td id="vitality">3</td>
                <td>4</td>
              </tr>
              <tr>
                <td id="vitality">4</td>
                <td>5</td>
              </tr>
              <tr>
                <td id="vitality">5</td>
                <td>6</td>
              </tr>
              <tr>
                <td id="vitality">6</td>
                <td>7</td>
              </tr>
            </table>

            <S.Paragraph>
              There is no limit on how much <span id="vitality">Vitality</span> an Entity can possess.
            </S.Paragraph>
          </S.Description>

          <S.Header>
            <span id="attack">Attack</span>
          </S.Header>
          <S.Description>
            <S.Paragraph>
              An Entity can attack along the attack vector attached to it - <span id="uk-attack">purple</span> for UK,{' '}
              <span id="russia-attack">orange</span> for Russia.
            </S.Paragraph>

            <S.Paragraph>
              The attacking Entity must spend <span id="resource">Resource</span> to perform at attack: minimum 1,
              maximum 6.
            </S.Paragraph>

            <S.Paragraph>
              The attack result is calculated by rolling one six-sided die and consulting the Combat Resolution table
              below.
            </S.Paragraph>

            <S.CombatResolutionTable>
              <S.FirstTwoRows>
                <S.EmptySpace />
                <S.DieRollHeader>
                  <S.CRTColumnHeader>Die Roll</S.CRTColumnHeader>

                  <S.CRTRow>
                    <S.CRTCell grey>1</S.CRTCell>
                    <S.CRTCell grey>2</S.CRTCell>
                    <S.CRTCell grey>3</S.CRTCell>
                    <S.CRTCell grey>4</S.CRTCell>
                    <S.CRTCell grey>5</S.CRTCell>
                    <S.CRTCell grey>6</S.CRTCell>
                  </S.CRTRow>
                </S.DieRollHeader>
              </S.FirstTwoRows>

              <S.RestOfTheTable>
                <S.WhiteSpaceForVerticalFlip />
                <S.ResourceSpentHeader>
                  <div>
                    <span id="resource">Resource</span>
                    {' Spent'}
                  </div>
                </S.ResourceSpentHeader>

                <S.TableData>
                  <S.CRTRow>
                    <S.CRTCell resourceBg>1</S.CRTCell>
                    <S.CRTCell>0</S.CRTCell>
                    <S.CRTCell green>1</S.CRTCell>
                    <S.CRTCell green>1</S.CRTCell>
                    <S.CRTCell green>1</S.CRTCell>
                    <S.CRTCell green>1</S.CRTCell>
                    <S.CRTCell green>2</S.CRTCell>
                  </S.CRTRow>
                  <S.CRTRow>
                    <S.CRTCell resourceBg>2</S.CRTCell>
                    <S.CRTCell>0</S.CRTCell>
                    <S.CRTCell green>1</S.CRTCell>
                    <S.CRTCell green>1</S.CRTCell>
                    <S.CRTCell green>1</S.CRTCell>
                    <S.CRTCell green>2</S.CRTCell>
                    <S.CRTCell green>2</S.CRTCell>
                  </S.CRTRow>
                  <S.CRTRow>
                    <S.CRTCell resourceBg>3</S.CRTCell>
                    <S.CRTCell red>-1</S.CRTCell>
                    <S.CRTCell>0</S.CRTCell>
                    <S.CRTCell green>1</S.CRTCell>
                    <S.CRTCell green>2</S.CRTCell>
                    <S.CRTCell green>2</S.CRTCell>
                    <S.CRTCell green>3</S.CRTCell>
                  </S.CRTRow>
                  <S.CRTRow>
                    <S.CRTCell resourceBg>4</S.CRTCell>
                    <S.CRTCell red>-1</S.CRTCell>
                    <S.CRTCell>0</S.CRTCell>
                    <S.CRTCell green>1</S.CRTCell>
                    <S.CRTCell green>2</S.CRTCell>
                    <S.CRTCell green>3</S.CRTCell>
                    <S.CRTCell green>4</S.CRTCell>
                  </S.CRTRow>
                  <S.CRTRow>
                    <S.CRTCell resourceBg>5</S.CRTCell>
                    <S.CRTCell red>-2</S.CRTCell>
                    <S.CRTCell red>-1</S.CRTCell>
                    <S.CRTCell green>2</S.CRTCell>
                    <S.CRTCell green>3</S.CRTCell>
                    <S.CRTCell green>3</S.CRTCell>
                    <S.CRTCell green>4</S.CRTCell>
                  </S.CRTRow>
                  <S.CRTRow last>
                    <S.CRTCell resourceBg>6</S.CRTCell>
                    <S.CRTCell red>-2</S.CRTCell>
                    <S.CRTCell red>-1</S.CRTCell>
                    <S.CRTCell>0</S.CRTCell>
                    <S.CRTCell green>3</S.CRTCell>
                    <S.CRTCell green>5</S.CRTCell>
                    <S.CRTCell green>6</S.CRTCell>
                  </S.CRTRow>
                </S.TableData>
              </S.RestOfTheTable>
            </S.CombatResolutionTable>

            <S.Paragraph>
              In the event of a negative result, the attack backfires and the attacker suffers damage to their own
              <span id="vitality"> Vitality</span>.
            </S.Paragraph>

            <S.Paragraph>
              Additionally, such a poorly executed attack can be <span className="emphasis">attributed</span> by the
              defender to the attacker, with repercussions detailed in the Attribution table below.
            </S.Paragraph>

            <S.AttributionTable>
              <S.FirstTwoRows>
                <S.ATEmptySpace />

                <S.ATHeader>
                  <S.ATFirstRow>Attribution Level</S.ATFirstRow>

                  <S.ATSecondRow>
                    <S.ATLevel1Header>-1</S.ATLevel1Header>
                    <S.ATLevel2Header>-2</S.ATLevel2Header>
                  </S.ATSecondRow>
                </S.ATHeader>
              </S.FirstTwoRows>

              <S.ATRestOfTable>
                <S.ATSpaceForVerticalElement />

                <S.ATEntityHeader>Attacking Entity</S.ATEntityHeader>

                <S.ATEntities>
                  <S.ATEntity russia>Energetic Bear</S.ATEntity>
                  <S.ATEntity russia>Online Trolls</S.ATEntity>
                  <S.ATEntity russia>SCS</S.ATEntity>
                  <S.ATEntity uk>GCHQ</S.ATEntity>
                  <S.ATEntity uk>UK Government</S.ATEntity>
                </S.ATEntities>

                <S.ATData>
                  <S.ATDataRow>
                    <S.ATLevel1Cell>UK gains Software Update asset.</S.ATLevel1Cell>
                    <S.ATLevel2Cell>UK gains Software Update and Recovery Management assets.</S.ATLevel2Cell>
                  </S.ATDataRow>

                  <S.ATDataRow>
                    <S.ATLevel1Cell>UK gains Education asset.</S.ATLevel1Cell>
                    <S.ATLevel2Cell>
                      UK gains Education asset, Online Trolls cannot launch attacks for 2 turns.
                    </S.ATLevel2Cell>
                  </S.ATDataRow>

                  <S.ATDataRow>
                    <S.ATLevel1Cell>
                      UK gains Software Update asset, SCS cannot bid on Black Market for 2 turns.
                    </S.ATLevel1Cell>
                    <S.ATLevel2Cell>
                      UK may choose to open up GCHQ-Rosenergoatom or UK Government-Russia Government attack vector at no
                      cost.
                    </S.ATLevel2Cell>
                  </S.ATDataRow>

                  <S.ATDataRow>
                    <S.ATLevel1Cell>GCHQ cannot launch attacks for 2 turns.</S.ATLevel1Cell>
                    <S.ATLevel2Cell>
                      <div>
                        GCHQ cannot perform any actions for 2 turns, UK Government loses{' '}
                        <span id="vitality">1 Vitality</span>.
                      </div>
                    </S.ATLevel2Cell>
                  </S.ATDataRow>

                  <S.ATDataRow>
                    <S.ATLevel1Cell>Russia gains Bargaining Chip asset.</S.ATLevel1Cell>
                    <S.ATLevel2Cell>
                      <div>
                        Russia gains Bargaining Chip asset, UK Government loses additional{' '}
                        <span id="vitality">2 Vitality</span> and <span id="resource">2 Resource</span>.
                      </div>
                    </S.ATLevel2Cell>
                  </S.ATDataRow>
                </S.ATData>
              </S.ATRestOfTable>
            </S.AttributionTable>

            <S.Paragraph>
              <span className="emphasis">Residual damage</span> is also suffered by any Entities directly connected to
              the damaged Entity. That damage is calculated in the ratio of <span className="emphasis">1:2</span>.
              Residual damage also applies for backfired attacks.
            </S.Paragraph>
          </S.Description>

          <S.Header>
            <span id="black-market">Black Market</span>
          </S.Header>
          <S.Description>
            <S.Paragraph>
              GCHQ or SCS can spend <span id="resource">Resource</span> they have to bid on items in the Black Market.
            </S.Paragraph>

            <S.Paragraph>
              If a team bids on an item and the other team does not increase on that bid in their immediately following
              turn, the bid winner receives the item on their subsequent turn.
            </S.Paragraph>

            <S.Paragraph>Multiple items can be bid on in one turn.</S.Paragraph>

            <S.Paragraph>
              It is an all-pay auction, meaning Resource used for all bids is considered spent - losing bids do not get
              refunded and do not count towards subsequent re-bids.
            </S.Paragraph>

            <S.Paragraph>Items can be hoarded for later use or played with immediate effect.</S.Paragraph>

            <S.Paragraph>All items can be bought by either team.</S.Paragraph>
          </S.Description>

          <S.Header>End of a game</S.Header>
          <S.Description>
            <S.Paragraph>
              If an attack results in any Entity being reduced to <span id="vitality">0 Vitality</span>, the attacker is
              awarded <span id="victory-points">10 Victory Points</span> and the game immediately ends.
            </S.Paragraph>

            <S.Paragraph>
              Remaining <span id="victory-points">Victory Points</span> up to that point are tallied up after full
              effects of attack have been finalised (i.e. residual damage).
            </S.Paragraph>

            <S.Paragraph>
              Note: It is possible to launch a successful game-ending attack and still lose the game. At the end of
              December each team states their Objectives and <span id="victory-points">Victory Points</span> are tallied
              up. The team with the most <span id="victory-points">Victory Points</span> is declared the winner.
            </S.Paragraph>
          </S.Description>
        </S.Body>

        <S.CloseButton onClick={onClose}>
          <IconClose width="30px" height="30px" fill="firebrick" />
        </S.CloseButton>
      </S.ModalBody>
    </S.HelpDialogModal>
  )
}
