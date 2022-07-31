import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import HomeIcon from '@mui/icons-material/Home'
import AddBoxIcon from '@mui/icons-material/AddBox'
import LoginIcon from '@mui/icons-material/Login'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const Menu = () => {
    const padding = {
      paddingRight: 10,
      paddingLeft: 10,
      paddingBottom: 10
    }
    return (
        <Box m={2} pt={3}>
            <Paper elevation={0} >
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        component={RouterLink}
                        to="/">
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        component={RouterLink}
                        to="/new">
                        <AddBoxIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        New visit
                    </Link>
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        component={RouterLink}
                        to="/login">
                        <LoginIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Login
                    </Link>
                    
                </Breadcrumbs>
            </Paper>
        </Box>
        
    )
}

export default Menu