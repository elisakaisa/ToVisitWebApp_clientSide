import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import React, { useState } from "react"
import Typography from '@mui/material/Typography'
import { LocationOn, Category, AccountTree, AttachMoney, TextSnippet, Hiking, PriceCheck, HourglassBottom, CalendarMonth } from "@mui/icons-material"
import '../app.css'


const VisitView = ({ visit }) => {

    // for checkbox
    const [checked, setChecked] = useState(visit.done);

    const handleChange = (event) => {
        setChecked(event.target.checked)
        //TODO: makes changes in backend too
    }

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
                    <CalendarMonth sx={{ mr: 0.5 }} fontSize="inherit" />&nbsp;
                    Time of year: {visit.timeOfYear.map(season => <li key={season} className="list"> {season}</li> )}
                    <AccountTree sx={{ mr: 0.5 }} fontSize="inherit" />&nbsp;
                    Ease of organization: {visit.easeOfOrganization}<br/>
                    <AttachMoney sx={{ mr: 0.5 }} fontSize="inherit" />&nbsp;
                    Price category: {visit.priceCategory}<br/>
                    <HourglassBottom sx={{ mr: 0.5 }} fontSize="inherit" />&nbsp;
                    Time: {visit.timeLength}<br/>
                    <TextSnippet sx={{ mr: 0.5 }} fontSize="inherit" />&nbsp;
                    Notes: {visit.notes}<br/>


                    <FormControlLabel control={<Checkbox 
                                                    checked={checked}
                                                    onChange={handleChange} />
                                        } label="Been there, done that" /><br/>

                    { visit.totalWalkingDistance && 
                        <>
                            <Hiking sx={{ mr: 0.5 }} fontSize="inherit" />&nbsp;
                            Total walking distance: {visit.totalWalkingDistance}<br/>
                        </>
                    }
                    { visit.actualPrice && 
                        <>
                            <PriceCheck sx={{ mr: 0.5 }} fontSize="inherit" />&nbsp;
                            Actual price: {visit.actualPrice}<br/>
                        </>
                    }

                </Typography>
            </Paper>
        </Box>
    )
}

export default VisitView