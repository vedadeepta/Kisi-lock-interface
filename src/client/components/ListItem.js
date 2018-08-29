import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const ListItemWrapper = ({ text, children, ...props }) => {
  const mergedItemProps = {
    button: true,
    ...props
  }
  return (
    <ListItem {...mergedItemProps} style={{ width: '100%'}}>
      <ListItemText primary={text} />
      {children}
    </ListItem>
  )
}

export default ListItemWrapper
