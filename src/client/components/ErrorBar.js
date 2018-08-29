import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4
  }
})

class SnackBarWrapper extends React.Component {
  state = {
    open: false
  }

  componentDidUpdate (prevProps) {
    if (prevProps.error.length !== this.props.error.length) {
      this.setState({ open: true })
    }
  }

  handleClick = () => {
    this.setState({ open: true })
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    this.setState({ open: false })
  };

  render () {
    const { classes, error } = this.props
    const len = Array.isArray(error) ? error.length : 0
    const message = len ? error[len - 1].message : null
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={this.state.open}
        autoHideDuration={6000}
        onClose={this.handleClose}
        ContentProps={{
          'aria-describedby': 'message-id'
        }}
        message={<span id='message-id'>{message}</span>}
        action={[
          <IconButton
            key='close'
            aria-label='Close'
            color='inherit'
            className={classes.close}
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    )
  }
}

SnackBarWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  error: PropTypes.array.isRequired
}

export default withStyles(styles)(SnackBarWrapper)
