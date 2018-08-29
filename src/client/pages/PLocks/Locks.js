import React, { Fragment } from 'react'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Lists, ListItem } from 'components'
import { LockIcon } from 'components/icons'

export default ({ locks, _unlock }) => {
  return (
    <Lists>
      {
        locks.map(({ id, name, unlocked }) => (
          <Fragment key={id}>
            <ListItem text={name} onClick={() => _unlock(id)}>
              <ListItemIcon>
                <LockIcon unlocked={unlocked} />
              </ListItemIcon>
            </ListItem>
          </Fragment>
        ))
      }
    </Lists>
  )
}
