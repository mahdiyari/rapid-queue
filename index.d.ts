export interface CreateQueue {
  push: (element: any) => avoid
  shift: () => any
  front: () => any
  length: () => number
  isEmpty: () => boolean
  indexOf: (element: any) => number
}

export function createQueue(intialCapacity: number): CreateQueue
export default RapidQueue = { createQueue }
