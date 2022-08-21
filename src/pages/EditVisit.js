import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Box, Button, Paper, Typography, Stack } from '@mui/material'
import { Save, Cancel } from '@mui/icons-material'

import AlertNotification from "../components/AlertNotification"
import AddVisitForm from '../components/AddVisitForm'
import { updateVisit } from '../reducers/visitReducer'
import { setNotification } from "../reducers/notificationReducer"

const EditVisit = ({ visit }) => {

    if (!visit) {
        return null
    }
    const initVisit = { ...visit, 
                        how: visit.how.toString(), 
                        category: visit.category.toString() }
    const initTimeOfYear = visit.timeOfYear // needed, bc otherwise reset does not work weel

    const notification = useSelector(state => state.notifications)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // state
    const [values, setValues] = useState(initVisit)
    const [timeOfYear, setTimeOfYear] = useState(initTimeOfYear)

    const handleReset = () => {
        setValues(initVisit)
        setTimeOfYear(initTimeOfYear)
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
                dispatch(setNotification('Please fill all required fields', 'error', 5))
                return
        }
        // validation seasons seasons
        if (!timeOfYear.spring && !timeOfYear.summer && !timeOfYear.fall 
            && !timeOfYear.winter && !timeOfYear.indoors) {
                dispatch(setNotification('Please set a time of year', 'error', 5))
                return
        }
        // add seasons, reform arrays
        const updatedValues = { ...values, 
                                timeOfYear: timeOfYear,
                                category: values.category.split(',') ,
                                how: values.how.split(',')
                            }

        dispatch(updateVisit(updatedValues))
        navigate(`/visits/${visit.id}`)
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
                        <Button variant="contained" onClick={handleSubmit} startIcon={<Save />}>
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