import React, { useState } from "react"
import { useSelector } from 'react-redux'

import { Box, Button, TextField, Paper, Typography, Stack, IconButton, InputLabel, OutlinedInput, InputAdornment, FormControl, MenuItem, FormLabel, FormGroup } from '@mui/material'
import { Tour, LocationOn, Category, Commute, 
    AccountTree, AttachMoney, TextSnippet, 
    Hiking, PriceCheck, HourglassBottom, 
    CalendarMonth, Add, Cancel, 
    LocalFloristTwoTone, LocalFlorist, Apartment,
    BeachAccessOutlined, BeachAccess, AcUnit } from "@mui/icons-material"
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

import AlertNotification from "../components/AlertNotification"

const AddVisitForm = () => {

    const notification = useSelector(state => state.notifications)

    // init states
    const initTimeOfYear = {
        spring: false,
        summer: false,
        fall: false,
        winter: false,
        indoors: false,
      }

    // states
    const [what, setWhat] = useState('')
    const [where, setWhere] = useState('')
    const [category, setCategory] = useState('') //TODO: allow multiple
    const [how, setHow] = useState('') //TODO: make it dropdown menu?
    const [timeLength, setTimeLength] = useState('')
    const [timeOfYear, setTimeOfYear] = useState(initTimeOfYear)
    const [priceCategory, setPriceCategory] = useState('') 
    const [easeOfOrganization, setEaseOfOrganization] = useState('') 
    const [notes, setNotes] = useState('')

    // dropdown menus
    const timeLengthOptions = [
        {
            value: 'day',
            label: 'day',
        },
        {
            value: 'weekend',
            label: 'weekend',
        },
        {
            value: 'long weekend',
            label: 'long weekend',
        },
        {
            value: 'week',
            label: 'week',
        },
    ]

    const priceCategoryOptions = [
        {
            value: 'free',
            label: 'free',
        },
        {
            value: '$',
            label: '$',
        },
        {
            value: '$$',
            label: '$$',
        },
        {
            value: '$$$',
            label: '$$$',
        },
    ]

    const easeOfOrganizationOptions = [
        {
            value: '*',
            label: '*',
        },
        {
            value: '**',
            label: '**',
        },
        {
            value: '***',
            label: '***',
        },
    ]

    const handleReset = () => {
        setWhat('')
        setWhere('')
        setCategory('')
        setHow('')
        setTimeLength('')
        setTimeOfYear(initTimeOfYear)
        setPriceCategory('')
        setEaseOfOrganization('')
        setNotes('')
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(what, where, how, category, timeLength, timeOfYear, priceCategory, easeOfOrganization, notes)
        //dispatch(loginAction({ username, password }))
        setWhat('')
        setWhere('')
        setCategory('')
        setHow('')
        setTimeLength('')
        setTimeOfYear(initTimeOfYear)
        setPriceCategory('')
        setEaseOfOrganization('')
        setNotes('')
    }

    const handleTimeOfYearChange = (event) => {
        setTimeOfYear({
          ...timeOfYear,
          [event.target.name]: event.target.checked,
        });
    }
    const {spring, summer, fall, winter, indoors} = timeOfYear

    return (
        <Box m={2} pt={3} component="form" sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}>
            <Typography variant="h5" component="div" gutterBottom>
                Add a visit
            </Typography>
            <Paper elevation={3} sx={{ p: 2 }}>
                {notification.message && <AlertNotification />}
                <div>
                    <FormControl sx={{ m:1, width: '50ch' }}>
                        <InputLabel htmlFor="component-outlined">What</InputLabel>
                        <OutlinedInput
                            onChange={({ target }) => setWhat(target.value)}
                            value={what}
                            label={"What"}
                            startAdornment={
                            <InputAdornment position="start">
                                <Tour />
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl sx={{ m:1, width: '50ch' }}>
                        <InputLabel htmlFor="component-outlined">Where</InputLabel>
                        <OutlinedInput
                            onChange={({ target }) => setWhere(target.value)}
                            value={where}
                            label={"Where"}
                            startAdornment={
                            <InputAdornment position="start">
                                <LocationOn />
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl sx={{ m:1, width: '50ch' }}>
                        <InputLabel htmlFor="component-outlined">Category</InputLabel>
                        <OutlinedInput
                            onChange={({ target }) => setCategory(target.value)}
                            value={category}
                            label={"Add category"}
                            startAdornment={
                            <InputAdornment position="start">
                                <Category />
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl sx={{ m:1, width: '50ch' }}>
                        <InputLabel htmlFor="component-outlined">How</InputLabel>
                        <OutlinedInput
                            
                            onChange={({ target }) => setHow(target.value)}
                            value={how}
                            label={"How"}
                            startAdornment={
                            <InputAdornment position="start">
                                <Commute />
                            </InputAdornment>
                            }
                        />
                        
                    </FormControl>
                </div>
                <div>
                    <TextField
                        style={{ width: 400}}
                        id="outlined-select-currency"
                        select
                        label="Time"
                        value={timeLength}
                        onChange={({ target }) => setTimeLength(target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="end">
                                    <HourglassBottom />
                                </InputAdornment>
                            ),
                        }}
                        >
                        {timeLengthOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div>
                    <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
                        <FormLabel component="legend">Time of year</FormLabel>
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                control={
                                <Checkbox checked={spring} onChange={handleTimeOfYearChange} name="spring" />
                                }
                                label={<LocalFlorist />}
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={summer} onChange={handleTimeOfYearChange} name="summer" />
                                }
                                label={<BeachAccess />}
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={fall} onChange={handleTimeOfYearChange} name="fall" />
                                }
                                label="Fall"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={winter} onChange={handleTimeOfYearChange} name="winter" />
                                }
                                label={<AcUnit />}
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={indoors} onChange={handleTimeOfYearChange} name="indoors" />
                                }
                                label={<Apartment />}
                            />
                        </FormGroup>
                    </FormControl>
                </div>
                <div>
                    <TextField
                        style={{ width: 400}}
                        id="outlined-select-currency"
                        select
                        label="Price category"
                        value={priceCategory}
                        onChange={({ target }) => setPriceCategory(target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="end">
                                    <AttachMoney />
                                </InputAdornment>
                            ),
                        }}
                        >
                        {priceCategoryOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div>
                    <TextField
                        style={{ width: 400}}
                        id="outlined-select-currency"
                        select
                        label="Ease of organization"
                        value={easeOfOrganization}
                        onChange={({ target }) => setEaseOfOrganization(target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="end">
                                    <AccountTree />
                                </InputAdornment>
                            ),
                        }}
                        >
                        {easeOfOrganizationOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div>
                    <FormControl sx={{ m:1, width: '50ch' }}>
                        <InputLabel htmlFor="component-outlined">Notes</InputLabel>
                        <OutlinedInput
                            onChange={({ target }) => setNotes(target.value)}
                            value={notes}
                            label={"Notes"}
                            multiline={true}
                            startAdornment={
                            <InputAdornment position="start">
                                <TextSnippet />
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
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

export default AddVisitForm