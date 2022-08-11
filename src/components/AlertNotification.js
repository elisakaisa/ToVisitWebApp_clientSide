import React from 'react'
import { useSelector } from 'react-redux'

import Alert from '@mui/material/Alert'

const AlertNotification = () => {
  const notification = useSelector(state => state.notifications)

  return (
    <div>
      {notification.type === 'error' &&
        <Alert severity="error">{notification.message}</Alert>
      }
      {notification.type === 'warning' &&
        <Alert severity="warning">{notification.message}</Alert>
      }
      {notification.type === 'info' &&
        <Alert severity="info">{notification.message}</Alert>
      }
      {notification.type === 'success' &&
        <Alert severity="success">{notification.message}</Alert>
      }
    </div>
  )
}

export default AlertNotification