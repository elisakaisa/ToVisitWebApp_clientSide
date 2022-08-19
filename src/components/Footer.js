import React from 'react'

import { Box, Typography, Link, IconButton } from '@mui/material'
import { GitHub, LinkedIn } from '@mui/icons-material'

const Footer = () => {
    return (
        <Box m={2} mt={4}>
            <Typography variant="body2" component="div" sx={{ p:0.5 }} gutterBottom >
                Webapp developed by Elisa Perini &nbsp;
                <IconButton href="https://github.com/elisakaisa" fontSize="inherit" target="_blank" rel="noopener noreferrer">
                    <GitHub />
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/elisa-perini-2759ba227/" fontSize="inherit" target="_blank" rel="noopener noreferrer">
                    <LinkedIn />
                </IconButton>
                <br/>
                Source code:{' '}
                <Link href="https://github.com/elisakaisa/ToVisitWebApp" underline="hover" color="inherit">
                    {'backend'}
                </Link>
                {' & '}
                <Link href="https://github.com/elisakaisa/ToVisitWebApp_clientSide" underline="hover" color="inherit">
                    {'frontend'}
                </Link>
            </Typography>
        </Box>
    )
}

export default Footer