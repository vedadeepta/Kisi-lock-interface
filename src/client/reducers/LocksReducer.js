import { LOCK_TYPES } from '../types'

const initialState = {
  locks: [],
  pending: false,
  error: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOCK_TYPES.FETCH: {
      return {
        ...state,
        pending: true
      }
    }

    case LOCK_TYPES.SUCCESS: {
      return {
        ...state,
        locks: action.payload.locks,
        pending: false
      }
    }

    case LOCK_TYPES.ERROR: {
      return {
        ...state,
        error: action.payload.error,
        pending: false
      }
    }

    case LOCK_TYPES.UNLOCK: {
      return {
        ...state,
        locks: action.payload.locks
      }
    }

    case LOCK_TYPES.UNLOCK_ERROR: {
      return {
        ...state,
        locks: action.payload.locks
      }
    }

    default: return state
  }
}
