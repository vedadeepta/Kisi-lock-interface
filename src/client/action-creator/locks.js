import { LOCK_TYPES } from '../types'

const fetchLocks = () => {
  return {
    type: LOCK_TYPES.FETCH
  }
}

const successLocks = (locks) => {
  return {
    type: LOCK_TYPES.SUCCESS,
    payload: {
      locks
    }
  }
}

const errorLocks = (error) => {
  return {
    type: LOCK_TYPES.ERROR,
    payload: {
      error
    }
  }
}

const unlock = () => {
  return {
    type: LOCK_TYPES.UNLOCK
  }
}

const unlockSuccess = (id, lock) => {
  return {
    type: LOCK_TYPES.UNLOCK_SUCCESS,
    payload: {
      id,
      lock
    }
  }
}

export {
  fetchLocks,
  successLocks,
  errorLocks,
  unlock,
  unlockSuccess
}
