import {
  fetchLocks,
  successLocks,
  mergeLocks,
  errorLocks,
  unlock,
  unlockSuccess,
  unlockError
} from '../action-creator'
import kisiClient from '../kisi-wrapper'

const _fetchLocks = () => async (dispatch) => {
  dispatch(fetchLocks())
  try {
    const result = await kisiClient.get('locks')
    dispatch(successLocks())
    dispatch(mergeLocks(result.data))
  } catch (e) {
    dispatch(errorLocks(e))
  }
}

const _unlock = (id, mock) => async (dispatch) => {
  dispatch(unlock(id))
  try {
    console.log('mock', mock)
    if (!mock) {
      await kisiClient.post(`locks/${id}/unlock`, {})
    }
    dispatch(unlockSuccess(id))
  } catch (e) {
    dispatch(unlockError(id, e))
  }
}

export { _fetchLocks, _unlock }
