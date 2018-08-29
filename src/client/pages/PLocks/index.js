import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { AppBar } from 'components'
import Locks from './Locks'

import { _fetchLocks, _unlock } from 'actions'

class PLocks extends React.Component {
  componentDidMount () {
    const { _fetchLocks } = this.props
    _fetchLocks()
  }

  render () {
    const { locks, _unlock } = this.props
    return (
      <Fragment>
        <AppBar title='Locks' />
        <Locks locks={locks} _unlock={_unlock} />
      </Fragment>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    locks: store.LocksReducer.locks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    _fetchLocks: () => {
      return dispatch(_fetchLocks())
    },
    _unlock: (id) => {
      return dispatch(_unlock(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PLocks)
