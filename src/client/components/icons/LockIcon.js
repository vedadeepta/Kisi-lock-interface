import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import LockIcon from '@material-ui/icons/Lock'
import LockOpen from '@material-ui/icons/LockOpen'

const styles = {
  root: {
    fontSize: 28
  }
}

const LockIconWrapper = ({ classes, unlocked = false, ...props }) => {
  return unlocked
    ? <LockOpen className={classes.root} />
    : <LockIcon {...props} className={classes.root} />
}

export default withStyles(styles)(LockIconWrapper)
