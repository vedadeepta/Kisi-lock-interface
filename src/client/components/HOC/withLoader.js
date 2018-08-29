import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'

const withLoader = (Component, pending) => ({ pending, ...props }) => {
  return (
    pending
      ? <LinearProgress size={50} />
      : <Component {...props} />
  )
}

export default withLoader
