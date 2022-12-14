import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink, useNavigate } from 'react-router-dom'

import Link from '@mui/material/Link'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import HomeIcon from '@mui/icons-material/Home'
import AddBoxIcon from '@mui/icons-material/AddBox'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import { Search, Analytics } from '@mui/icons-material'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

import { logoutAction } from '../reducers/loginReducer'

const Menu = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // logged in user
    const user = useSelector((state) => state.login)

    const handleLogout = () => {
        dispatch(logoutAction())
        navigate('/')
    }

    return (
        <Box p={1} pl={2} >
            <Paper elevation={0} sx= {{ p:1, backgroundColor:  "#010204"}}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        component={RouterLink}
                        fontSize="inherit"
                        to="/">
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    </Link>
                    {user.token && 
                        <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        component={RouterLink}
                        fontSize="inherit"
                        to="/new">
                        <AddBoxIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        New visit
                        </Link>
                    }
                    {user.token && 
                        <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        component={RouterLink}
                        fontSize="inherit"
                        to="/search">
                        <Search sx={{ mr: 0.5 }} fontSize="inherit" />
                        Search
                        </Link>
                    }
                    {user.token && 
                        <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        component={RouterLink}
                        fontSize="inherit"
                        to="/analytics">
                        <Analytics sx={{ mr: 0.5 }} fontSize="inherit" />
                        Analytics
                        </Link>
                    }
                    {!user.token && 
                            <Link
                            underline="hover"
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="inherit"
                            component={RouterLink}
                            fontSize="inherit"
                            to="/login">
                            <LoginIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Login
                        </Link>
                    } 
                    {user.token &&
                        <Link
                            underline="hover"
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="inherit"
                            component='button'
                            fontSize="inherit"
                            onClick={handleLogout}>
                            <LogoutIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Logout
                        </Link>
                    }
                </Breadcrumbs>
            </Paper>
        </Box>
    )
}

export default Menu