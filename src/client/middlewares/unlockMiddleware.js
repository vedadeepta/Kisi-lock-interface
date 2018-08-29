import { successLocks } from '../action-creator'
import { LOCK_TYPES } from '../types'

const unlockMiddleware = store => next => action => {
  if (action.type === LOCK_TYPES.UNLOCK_SUCCESS) {
    const { payload: { id, lock } } = action
    const locks = store.getState().LockReducer.locks
    const index = locks.findIndex(lock => lock.id === id)
    const newLocks = Object.assign([], locks, {[index]: lock})
    return next(successLocks(newLocks))
  }

  return next(action)
}

export default unlockMiddleware
