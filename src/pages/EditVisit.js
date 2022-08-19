import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Box, Button, Paper, Typography, Stack } from '@mui/material'
import { Edit, Cancel } from '@mui/icons-material'

import AlertNotification from "../components/AlertNotification"
import AddVisitForm from '../components/AddVisitForm'
import { updateVisit } from '../reducers/visitReducer'

const EditVisit = ({ visit }) => {

    if (!visit) {
        return null
    }

    const initVisit = visit

    const notification = useSelector(state => state.notifications)
    const dispatch = useDispatch()

    // state
    const [values, setValues] = useState(initVisit)
    const [timeOfYear, setTimeOfYear] = useState(initVisit.timeOfYear)

    const handleReset = () => {
        setTimeOfYear(initVisit.TimeOfYear)
        setValues(initVisit)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        // add seasons
        //TODO: add validation for seasons!!!
        const updatedValues = {
            ...values,
            timeOfYear: timeOfYear,
        }
        // split categories and how TODO: figure out a way so it doesn't crash
        //values.category = values.category.split(',')
        //values.how = values.how.split(',')

        dispatch(updateVisit(updatedValues))
        //setTimeOfYear(initTimeOfYear)
        //setValues(initValues)
    }

    return (
        <Box m={2} pt={3} component="form" sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}>
            <Typography variant="h5" component="div" gutterBottom>
                Edit visit {visit.what}
            </Typography>
            <Paper elevation={3} sx={{ p: 2 }}>
                {notification.message && <AlertNotification />}
                <AddVisitForm 
                    timeOfYear={timeOfYear} 
                    setTimeOfYear={setTimeOfYear}
                    values={values}
                    setValues={setValues} 
                    edit={true}
                    />
                <div>
                    <Stack direction="row" spacing={2} sx={{ pt:2, pl:1 }}>
                        <Button variant="contained" onClick={handleSubmit} startIcon={<Edit />}>
                            Edit
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

export default EditVisit