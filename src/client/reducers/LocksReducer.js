import { LOCK_TYPES } from '../types'

const initialState = {
  locks: [],
  pending: {
    fetch: false,
    lockops: false
  },
  error: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOCK_TYPES.FETCH: {
      return {
        ...state,
        pending: {
          ...state.pending,
          fetch: true
        }
      }
    }

    case LOCK_TYPES.SUCCESS: {
      return {
        ...state,
        locks: action.payload.locks,
        pending: {
          ...state.pending,
          fetch: false,
          lockops: false
        }
      }
    }

    case LOCK_TYPES.ERROR: {
      return {
        ...state,
        error: action.payload.error,
        pending: {
          ...state.pending,
          fetch: false,
          lockops: false
        }
      }
    }

    case LOCK_TYPES.UNLOCK: {
      return {
        ...state,
        pending: {
          ...state.pending,
          lockops: true
        }
      }
    }

    default: return state
  }
}
