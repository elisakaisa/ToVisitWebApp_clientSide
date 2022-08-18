import React, { useState } from "react"
import { useSelector } from 'react-redux'

import { Box, Button, Paper, Typography, Stack } from '@mui/material'
import { Add, Cancel } from "@mui/icons-material"

import AlertNotification from "../components/AlertNotification"
import { initTimeOfYear, initValues } from "../constants/constantValues"
import AddVisitForm from "../components/AddVisitForm"

const AddVisit = () => {

    const notification = useSelector(state => state.notifications)

    // states
    const [category, setCategory] = useState('') //TODO: allow multiple
    const [how, setHow] = useState('') //TODO: make it dropdown menu?
    const [timeOfYear, setTimeOfYear] = useState(initTimeOfYear)
    const [values, setValues] = useState(initValues)


    const handleReset = () => {
        setTimeOfYear(initTimeOfYear)
        setValues(initValues)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        values.timeOfYear = timeOfYear
        console.log('values', values)
        //dispatch(loginAction({ username, password }))
        setTimeOfYear(initTimeOfYear)
        setValues(initValues)
    }

    return (
        <Box m={2} pt={3} component="form" sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}>
            <Typography variant="h5" component="div" gutterBottom>
                Add a visit
            </Typography>
            <Paper elevation={3} sx={{ p: 2 }}>
                {notification.message && <AlertNotification />}
                <AddVisitForm 
                    timeOfYear={timeOfYear} 
                    setTimeOfYear={setTimeOfYear}
                    values={values}
                    setValues={setValues} 
                    edit={false}
                    />
                <div>
                    <Stack direction="row" spacing={2} sx={{ pt:2, pl:1 }}>
                        <Button variant="contained" onClick={handleSubmit} startIcon={<Add />}>
                            Add
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

export default AddVisit