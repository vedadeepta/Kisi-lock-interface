import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { AppBar, SnackBar } from 'components'
import Locks from './Locks'

import { _fetchLocks, _unlock } from 'actions'

class PLocks extends React.Component {
  componentDidMount () {
    const { _fetchLocks } = this.props
    _fetchLocks()
  }

  render () {
    const {
      locks,
      error: { reason },
      pending,
      _unlock
    } = this.props

    return (
      <Fragment>
        <AppBar title='Locks' />
        <Locks
          locks={locks}
          pending={pending}
          _unlock={_unlock}
        />
        <SnackBar message={reason} />
      </Fragment>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    locks: store.LocksReducer.locks,
    error: store.LocksReducer.error,
    pending: store.LocksReducer.pending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    _fetchLocks: () => {
      return dispatch(_fetchLocks())
    },
    _unlock: (id, mock) => {
      return dispatch(_unlock(id, mock))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PLocks)
