import { Handle, Position } from 'reactflow'

import { EntityType, TeamSide } from '@types'

interface HandleDeterminatorProps {
  type: EntityType
  side: TeamSide
  userSide: TeamSide
}

export const HandleDeterminator = ({ type, side, userSide }: HandleDeterminatorProps) => {
  // Blue side
  if (side === TeamSide.Blue) {
    const isUserSide = userSide === TeamSide.Blue

    // Electorate
    if (type === EntityType.People) {
      return (
        <>
          <Handle type="source" position={Position.Left} />
          <Handle type="target" position={Position.Top} id="toTop" />
          <Handle type="target" position={Position.Bottom} id="toBottom" />
        </>
      )
    }

    // UK PLC
    if (type === EntityType.Industry) {
      return (
        <>
          <Handle type="target" position={Position.Right} />
          <Handle type="source" position={Position.Top} id="fromTop" />
          <Handle type="source" position={Position.Bottom} id="fromBottom" />
        </>
      )
    }

    // UK Government
    if (type === EntityType.Government) {
      return (
        <>
          <Handle type="target" position={Position.Right} />
          <Handle type="source" position={Position.Left} />
        </>
      )
    }

    // UK Energy
    if (type === EntityType.Energy) {
      return <Handle type="source" position={Position.Left} />
    }

    // GCHQ
    if (type === EntityType.Intelligence) {
      return <Handle type="target" position={Position.Right} />
    }
  } else {
    const isUserSide = userSide === TeamSide.Red

    // Online trolls
    if (type === EntityType.People) {
      return (
        <>
          <Handle type="target" position={Position.Left} />
        </>
      )
    }

    // Energetic Bear
    if (type === EntityType.Industry) {
      return (
        <>
          <Handle type="source" position={Position.Right} />
          <Handle type="target" position={Position.Top} id="toTop" />
          <Handle type="target" position={Position.Bottom} id="toBottom" />
        </>
      )
    }

    // Russian Government
    if (type === EntityType.Government) {
      return (
        <>
          <Handle type="source" position={Position.Right} />
          <Handle type="target" position={Position.Left} />
        </>
      )
    }

    // UK Energy
    if (type === EntityType.Energy) {
      return <Handle type="target" position={Position.Left} />
    }

    // GCHQ
    if (type === EntityType.Intelligence) {
      return <Handle type="source" position={Position.Right} />
    }
  }

  return null
}
