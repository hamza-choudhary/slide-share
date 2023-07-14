import { Alert } from '@mui/material'
import React from 'react'

function MyAlert(props) {
  return (
    <Alert severity={props.severity}>{props.message}</Alert>
  )
}

export default MyAlert