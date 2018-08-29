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

const unlock = (id) => {
  return {
    type: LOCK_TYPES.UNLOCK,
    payload: {
      id
    }
  }
}

const unlockSuccess = (id) => {
  return {
    type: LOCK_TYPES.UNLOCK_SUCCESS,
    payload: {
      id
    }
  }
}

const unlockError = (id, error) => {
  return {
    type: LOCK_TYPES.UNLOCK_ERROR,
    payload: {
      id,
      error
    }
  }
}

export {
  fetchLocks,
  successLocks,
  errorLocks,
  unlock,
  unlockSuccess,
  unlockError
}
