import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import React, { useState } from "react"
import Typography from '@mui/material/Typography'
import { LocationOn, Category, AccountTree, AttachMoney, TextSnippet, Hiking, PriceCheck, HourglassBottom, CalendarMonth } from "@mui/icons-material"
import DeleteIcon from '@mui/icons-material/Delete'
import { Edit } from '@mui/icons-material'
import { Stack } from '@mui/material'
import '../app.css'


//TODO: add how!!!!!

const VisitView = ({ visit }) => {

    const navigate = useNavigate()

    if (!visit) {
        return null
    }

    // for checkbox
    const [checked, setChecked] = useState(visit.done)

    // logged in user
    const user = useSelector((state) => state.login)

    const handleChange = (event) => {
        setChecked(event.target.checked)
        //TODO: makes changes in backend too
    }

    // delete visit
    const deleteVisit = async (blog) => {
        if (window.confirm(`Do you want to remove "${visit.what}"?`)) {
            //dispatch(deleteBlog(blog.id))
            navigate('/')
        }
    }

    const navigateToEdit = () => {
        navigate(`/visits/${visit.id}/edit`)
    }

    return (
        <Box m={2} pt={3}>
            <Paper elevation={3} >
                <Typography variant="h5" component="div" sx={{ p: 2 }} gutterBottom >
                    {visit.what}
                </Typography>
                <Typography variant="body1" sx={{ m: 2 }} gutterBottom>
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

                    {user.token && 
                        <>
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
                        </>
                    }

                </Typography>
                <Stack direction="row" spacing={2} sx={{ p:2 }}>
                    <Button variant="outlined" onClick={deleteVisit} startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                    <Button variant="outlined" onClick={navigateToEdit} startIcon={<Edit />}>
                        Edit
                    </Button>
                </Stack>
            </Paper>
        </Box>
    )
}

export default VisitView