import React, { Fragment } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Button from '@material-ui/core/Button'
import { Lists, ListItem } from 'components'
import { LockIcon } from 'components/icons'
import { withLoader } from 'components/HOC'

const UnlockButton = ({id, _unlock, unlocked}) => {
  return (
    <Button
      color='primary'
      onClick={() => _unlock(id)}
    >
      Actual Unlock
      <ListItemIcon style={{cursor: 'pointer'}}>
        <LockIcon unlocked={unlocked} />
      </ListItemIcon>
    </Button>
  )
}
const Locks = ({ locks, _unlock }) => {
  return (
    <Lists>
      {
        locks.map(({ id, name, unlocked, unlockInProcess }) => (
          <Fragment key={id}>
            <ListItem text={name} button={false}>
              {
                unlockInProcess
                  ? <CircularProgress />
                  : <UnlockButton
                    id={id}
                    _unlock={_unlock}
                    unlocked={unlocked}
                  />
              }
              <Button
                color='secondary'
                onClick={() => _unlock(id, true)}
              >
                Mock Unlock
              </Button>
            </ListItem>
          </Fragment>
        ))
      }
    </Lists>
  )
}

export default withLoader(Locks)
