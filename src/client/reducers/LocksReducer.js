import { LOCK_TYPES } from '../types'

const initialState = {
  locks: [],
  pending: false,
  error: []
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
        pending: false
      }
    }

    case LOCK_TYPES.MERGE: {
      return {
        ...state,
        locks: action.payload.locks
      }
    }

    case LOCK_TYPES.ERROR: {
      const { payload: { error } } = action
      return {
        ...state,
        error: state.error.concat(error),
        pending: false
      }
    }

    default: return state
  }
}
