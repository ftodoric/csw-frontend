import { MarkerType } from 'reactflow'

import { TeamSide } from '@types'

const edgeStyle = {
  stroke: '#888888',
}

export const initialEdges = (userSide: TeamSide) => [
  // Blue side
  {
    id: 'elec-ukPlc',
    source: 'node-electorate',
    target: 'node-ukPlc',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: edgeStyle.stroke,
    },
    type: 'straight',
    style: edgeStyle,
  },

  {
    id: 'elec-gov',
    source: 'node-electorate',
    target: 'node-ukGovernment',
    type: 'straight',
    style: edgeStyle,
  },

  {
    id: 'ukEne-elec',
    source: 'node-ukEnergy',
    sourceHandle: 'toElectorate',
    target: 'node-electorate',
    targetHandle: userSide === TeamSide.Blue ? 'toTop' : 'toBottom',
    type: 'straight',
    style: edgeStyle,
  },

  {
    id: 'ukGov-ukPlc',
    source: 'node-ukGovernment',
    target: 'node-ukPlc',
    type: 'straight',
    style: edgeStyle,
  },

  {
    id: 'ukPlc-gchq',
    source: 'node-ukPlc',
    sourceHandle: userSide === TeamSide.Blue ? 'fromTop' : 'fromBottom',
    target: 'node-gchq',
    targetHandle: 'fromUkPlc',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: edgeStyle.stroke,
    },
    type: 'straight',
    style: edgeStyle,
  },

  {
    id: 'ukGov-gchq',
    source: 'node-ukGovernment',
    target: 'node-gchq',
    targetHandle: 'fromGov',
    type: 'straight',
    style: edgeStyle,
  },

  {
    id: 'ukEne-ukGov',
    source: 'node-ukEnergy',
    target: 'node-ukGovernment',
    type: 'straight',
    style: edgeStyle,
  },

  // Red Side
  {
    id: 'rusGov-trolls',
    source: 'node-russianGovernment',
    target: 'node-onlineTrolls',
    type: 'straight',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: edgeStyle.stroke,
    },
    style: edgeStyle,
  },

  {
    id: 'ukGov-rosenergoatom',
    source: 'node-russianGovernment',
    target: 'node-rosenergoatom',
    type: 'straight',
    style: edgeStyle,
  },

  {
    id: 'eneBear-rusGov',
    source: 'node-energeticBear',
    target: 'node-russianGovernment',
    type: 'straight',
    style: edgeStyle,
  },

  {
    id: 'scs-rusGov',
    source: 'node-scs',
    target: 'node-russianGovernment',
    type: 'straight',
    style: edgeStyle,
  },

  {
    id: 'scs-eneBear',
    source: 'node-scs',
    target: 'node-energeticBear',
    targetHandle: userSide === TeamSide.Red ? 'toTop' : 'toBottom',
    type: 'straight',
    style: edgeStyle,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: edgeStyle.stroke,
    },
  },
]
