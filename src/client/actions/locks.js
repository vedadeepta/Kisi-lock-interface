import {
  fetchLocks,
  successLocks,
  errorLocks,
  unlock,
  unlockSuccess
} from '../action-creator'
import kisiClient from '../kisi-wrapper'

const _fetchLocks = () => async (dispatch) => {
  dispatch(fetchLocks())
  try {
    const result = await kisiClient.get('locks')
    dispatch(successLocks(result.data))
  } catch (e) {
    console.log(e)
    dispatch(errorLocks(e))
  }
}

const _unlock = (id) => async (dispatch) => {
  dispatch(unlock())
  try {
    const result = await kisiClient.post(`locks/${id}/unlock`, {})
    console.log(result.data)
  } catch (e) {
    console.log(e)
    dispatch(errorLocks(e))
  }
}

export { _fetchLocks, _unlock }
