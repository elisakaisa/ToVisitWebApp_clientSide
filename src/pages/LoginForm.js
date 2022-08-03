import React, { useState } from "react"
import { Box, Button, Paper, TextField, Typography, Stack, IconButton, InputLabel, OutlinedInput } from '@mui/material'
import { Login, Cancel, Visibility, VisibilityOff } from '@mui/icons-material'
import InputAdornment from '@mui/material/InputAdornment'

const LoginForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleReset = () => {
        setUsername('')
        setPassword('')
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        //dispatch(loginAction({ username, password }))
        setUsername('')
        setPassword('')
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return (
        <Box m={2} pt={3} component="form" sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}>
            <Typography variant="h5" component="div" gutterBottom>
                Login
            </Typography>
            <Paper elevation={3} sx={{ p: 2 }}>
                <div>
                    <InputLabel htmlFor="component-outlined">Username</InputLabel>
                    <OutlinedInput
                        onChange={({ target }) => setUsername(target.value)}
                        value={username}
                        label={"Username"}
                    />
                </div>
                <div>
                    <InputLabel htmlFor="component-outlined">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        onChange={({ target }) => setPassword(target.value)}
                        value={password}
                        label={"Password"}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                    />
                </div>
                <div>
                <Stack direction="row" spacing={2} sx={{ pt:2 }}>
                    <Button variant="contained" onClick={handleSubmit} startIcon={<Login />}>
                        Login
                    </Button>
                    <Button variant="outlined" onClick={handleReset} endIcon={<Cancel />}>
                        Cancel
                    </Button>
                </Stack>
                </div>
               
            </Paper>
        </Box>
    )
}

export default LoginForm