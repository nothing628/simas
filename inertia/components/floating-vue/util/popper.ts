import type { Placement as BasePlacement } from '@floating-ui/dom'

export type Placement = BasePlacement | 'auto' | 'auto-start' | 'auto-end'

export const placements: Placement[] = [
  'auto',
  'auto-start',
  'auto-end',
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end',
]
