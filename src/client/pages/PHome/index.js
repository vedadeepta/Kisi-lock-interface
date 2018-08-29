import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export default () => {
  return (
    <div style={styles}>
      <Typography>Hello</Typography>
      <Link to='/locks'>
        <Button>
          Click to view locks
        </Button>
      </Link>
    </div>
  )
}
