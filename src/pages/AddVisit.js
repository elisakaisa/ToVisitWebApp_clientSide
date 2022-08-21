import React, { useState } from "react"
import { useDispatch } from 'react-redux'

import { Box, Button, Typography, Stack } from '@mui/material'
import { Add, Cancel } from "@mui/icons-material"

import { initTimeOfYear, initValues } from "../constants/constantValues"
import AddVisitForm from "../components/AddVisitForm"
import { createVisit } from "../reducers/visitReducer"
import { setNotification } from "../reducers/notificationReducer"

const AddVisit = () => {

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
        // validate & add seasons
        if (!timeOfYear.spring && !timeOfYear.summer && !timeOfYear.fall 
            && !timeOfYear.winter && !timeOfYear.indoors) {
                dispatch(setNotification('Please set a time of year', 'error', 5))
                return
        }
        values.timeOfYear = timeOfYear
        // split categories and how
        values.category = values.category.split(' ')
        values.how = values.how.split(' ')

        dispatch(createVisit(values))
        setTimeOfYear(initTimeOfYear)
        setValues(initValues)
    }

    return (
        <Box m={2} pt={1} component="form" sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}>
            <Typography variant="h5" component="div" gutterBottom>
                Add a visit
            </Typography>
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
        </Box>
    )
}

export default AddVisit