import { MarkerType } from 'reactflow'

import { TeamSide } from '@types'

const edgeStyle = {
  stroke: '#888888',
}

const basicEdgeStyle = {
  type: 'straight',
  style: edgeStyle,
}

const attackEdgeStyle = {
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: edgeStyle.stroke,
  },
  animated: true,
  style: {
    stroke: 'firebrick',
  },
}

// Simple creation of required edge props
const basicEdgeFrom = (source: string) => {
  return {
    to: (target: string) => {
      return {
        id: `${source.replace('node-', '')}-${target.replace('node-', '')}`,
        source,
        target,
      }
    },
  }
}

export const calculateEdges = (userSide: TeamSide) => [
  // Blue side
  {
    ...basicEdgeFrom('node-electorate').to('node-ukPlc'),
    ...basicEdgeStyle,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: edgeStyle.stroke,
    },
  },

  {
    ...basicEdgeFrom('node-electorate').to('node-ukGovernment'),
    ...basicEdgeStyle,
  },

  {
    ...basicEdgeFrom('node-ukPlc').to('node-gchq'),
    sourceHandle: userSide === TeamSide.Blue ? 'fromTop' : 'fromBottom',
    ...basicEdgeStyle,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: edgeStyle.stroke,
    },
  },

  {
    ...basicEdgeFrom('node-ukGovernment').to('node-ukPlc'),
    ...basicEdgeStyle,
  },

  {
    ...basicEdgeFrom('node-ukGovernment').to('node-gchq'),
    ...basicEdgeStyle,
  },

  {
    ...basicEdgeFrom('node-ukEnergy').to('node-electorate'),
    targetHandle: userSide === TeamSide.Blue ? 'toTop' : 'toBottom',
    ...basicEdgeStyle,
  },

  {
    ...basicEdgeFrom('node-ukEnergy').to('node-ukGovernment'),
    ...basicEdgeStyle,
  },

  // Red Side
  {
    ...basicEdgeFrom('node-energeticBear').to('node-russianGovernment'),
    ...basicEdgeStyle,
  },

  {
    ...basicEdgeFrom('node-russianGovernment').to('node-onlineTrolls'),
    ...basicEdgeStyle,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: edgeStyle.stroke,
    },
  },

  {
    ...basicEdgeFrom('node-russianGovernment').to('node-rosenergoatom'),
    ...basicEdgeStyle,
  },

  {
    ...basicEdgeFrom('node-scs').to('node-energeticBear'),
    targetHandle: userSide === TeamSide.Red ? 'toTop' : 'toBottom',
    ...basicEdgeStyle,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: edgeStyle.stroke,
    },
  },

  {
    ...basicEdgeFrom('node-scs').to('node-russianGovernment'),
    ...basicEdgeStyle,
  },
]
