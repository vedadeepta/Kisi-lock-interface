import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
})

const ListWrapper = ({ classes, listProps, children }) => {
  const mergedListProps = {
    component: 'div',
    ...listProps
  }
  return (
    <div className={classes.root}>
      <List {...mergedListProps}>
        {children}
      </List>
    </div>
  )
}

ListWrapper.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ListWrapper)
