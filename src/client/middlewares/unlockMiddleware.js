import { successLocks, errorLocks } from '../action-creator'
import { LOCK_TYPES } from '../types'

const unlockMiddleware = store => next => action => {
  if (action.type === LOCK_TYPES.UNLOCK) {
    const { payload: { id } } = action
    const locks = store.getState().LocksReducer.locks
    const index = locks.findIndex(lock => lock.id === id)
    const newLocks = Object.assign(
      [],
      locks,
      { [index]: {...locks[index], unlockInProcess: true} }
    )
    action.payload.locks = newLocks
    return next(action)
  }

  if (action.type === LOCK_TYPES.UNLOCK_ERROR) {
    const { payload: { id } } = action
    const locks = store.getState().LocksReducer.locks
    const index = locks.findIndex(lock => lock.id === id)
    const newLocks = Object.assign(
      [],
      locks,
      { [index]: {...locks[index], unlockInProcess: false, unlockFailed: true } }
    )
    action.payload.locks = newLocks
    next(action)
    return next(errorLocks(action.payload.error))
  }

  if (action.type === LOCK_TYPES.UNLOCK_SUCCESS) {
    const { payload: { id } } = action
    const locks = store.getState().LocksReducer.locks
    const index = locks.findIndex(lock => lock.id === id)
    const newLocks = Object.assign(
      [],
      locks,
      { [index]: {
        ...locks[index],
        unlocked: true,
        unlockInProcess: false,
        unlockFailed: false
      }}
    )
    return next(successLocks(newLocks))
  }

  return next(action)
}

export default unlockMiddleware
