import { Container } from "@mui/material"
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import React from "react"
import Typography from '@mui/material/Typography'
import { LocationOn, Category, AccountTree, AttachMoney, TextSnippet } from "@mui/icons-material"
import '../app.css'


const VisitView = ({ visit }) => {
    return (
        <Box m={2} pt={3}>
            <Paper elevation={3} >
                <Typography variant="h5" component="div" sx={{ p: 2 }} gutterBottom >
                    {visit.what}
                </Typography>
                <Typography variant="body1" sx={{ p: 2 }} gutterBottom>
                    <LocationOn sx={{ mr: 0.5 }} fontSize="inherit" />&nbsp;
                    Where: {visit.where}<br/>
                    <Category sx={{ mr: 0.5 }} fontSize="inherit" />&nbsp;
                    Categories: {visit.category.map(cat => <li key={cat} className="list"> {cat}</li> )}
                    <AccountTree sx={{ mr: 0.5 }} fontSize="inherit" />&nbsp;
                    Ease of organization: {visit.easeOfOrganization}<br/>
                    <AttachMoney sx={{ mr: 0.5 }} fontSize="inherit" />&nbsp;
                    Price category: {visit.priceCategory}<br/>
                    <TextSnippet sx={{ mr: 0.5 }} fontSize="inherit" />&nbsp;
                    Notes: {visit.notes}<br/>
                </Typography>
            </Paper>
        </Box>
    )
}

export default VisitView