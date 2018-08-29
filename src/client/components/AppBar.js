import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 10
  }
}

const AppBarWrapper = ({ title, classes, appBarProps }) => {
  const mergedAppBarProps = {
    position: 'static',
    ...appBarProps
  }
  return (
    <div className={classes.root}>
      <AppBar {...mergedAppBarProps} >
        <Toolbar>
          <Typography variant='title' color='inherit'>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

AppBarWrapper.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AppBarWrapper)
