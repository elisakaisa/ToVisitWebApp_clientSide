import React, { useState } from "react"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { Box, Button, Paper, Typography, Stack } from '@mui/material'
import { Add, Cancel } from "@mui/icons-material"

import AlertNotification from "../components/AlertNotification"
import { initTimeOfYear, initValues } from "../constants/constantValues"
import AddVisitForm from "../components/AddVisitForm"
import { createVisit } from "../reducers/visitReducer"
import { setNotification } from "../reducers/notificationReducer"

const AddVisit = () => {

    const notification = useSelector(state => state.notifications)
    const dispatch = useDispatch()

    // states
    const [timeOfYear, setTimeOfYear] = useState(initTimeOfYear)
    const [values, setValues] = useState(initValues)


    const handleReset = () => {
        setTimeOfYear(initTimeOfYear)
        setValues(initValues)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        // validation
        if (values.what === ''
            || values.where === ''
            || values.time === ''
            || values.category === ''
            || values.priceCategory === ''
            || values.easeOfOrganization === ''
            || values.how === '') {
                dispatch(setNotification('Please fill all fields', 'error', 5))
                return
            }
        // add seasons
        values.timeOfYear = timeOfYear //TODO: add validation for seasons!!!
        // split categories and how
        values.category = values.category.split(',')
        values.how = values.how.split(',')
        console.log(values)

        dispatch(createVisit(values))
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