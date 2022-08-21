import React from 'react'

import { TextField, InputLabel, OutlinedInput, 
    InputAdornment, FormControl, FormHelperText,
    MenuItem, FormLabel, FormGroup } from '@mui/material'
import { Tour, LocationOn, Category, Commute, 
    AccountTree, AttachMoney, TextSnippet, 
    Hiking, PriceCheck, HourglassBottom,
    LocalFlorist, Apartment, AcUnit,
    Umbrella, WbSunny } from "@mui/icons-material"
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

import { timeLengthOptions, priceCategoryOptions, easeOfOrganizationOptions } from "../constants/constantValues"


const AddVisitForm = ({timeOfYear, setTimeOfYear, values, setValues, edit }) => {

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value })
    }

    const handleBooleanChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.checked })
    }

    const handleTimeOfYearChange = (event) => {
        setTimeOfYear({ ...timeOfYear, [event.target.name]: event.target.checked })
    } 

    const {spring, summer, fall, winter, indoors} = timeOfYear

    return (
        <div>
            <div>
                <FormControl sx={{ m:1, width: '50ch' }}>
                    <InputLabel required htmlFor="component-outlined">What</InputLabel>
                    <OutlinedInput
                        onChange={handleChange('what')}
                        value={values.what}
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
                    <InputLabel required htmlFor="component-outlined">Where</InputLabel>
                    <OutlinedInput
                        onChange={handleChange('where')}
                        value={values.where}
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
                    <InputLabel required htmlFor="component-outlined">Category</InputLabel>
                    <OutlinedInput
                        onChange={handleChange('category')}
                        value={values.category}
                        label={"Add category"}
                        startAdornment={
                            <InputAdornment position="start">
                                <Category />
                            </InputAdornment>
                        }
                    />
                    <FormHelperText id="outlined-weight-helper-text">Add multiple by separating by ','</FormHelperText>
                </FormControl>
            </div>
            <div>
                <FormControl sx={{ m:1, width: '50ch' }}>
                    <InputLabel required htmlFor="component-outlined">How</InputLabel>
                    <OutlinedInput
                        onChange={handleChange('how')}
                        value={values.how}
                        label={"How"}
                        startAdornment={
                            <InputAdornment position="start">
                                <Commute />
                            </InputAdornment>
                        }
                    />
                    <FormHelperText id="outlined-weight-helper-text">Add multiple by separating by ','</FormHelperText>
                </FormControl>
            </div>
            <div>
                <TextField
                    style={{ width: 400}}
                    required
                    id="outlined-select-currency"
                    select
                    label="Time"
                    value={values.timeLength}
                    onChange={handleChange('timeLength')}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="end">
                                <HourglassBottom />
                            </InputAdornment>
                        ),
                    }}>
                    {timeLengthOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div>
                <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
                    <FormLabel required component="legend">Time of year</FormLabel>
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                            control={
                            <Checkbox checked={spring} onChange={handleTimeOfYearChange} name="spring" />
                            }
                            label={<LocalFlorist />}/>
                        <FormControlLabel
                            control={
                            <Checkbox checked={summer} onChange={handleTimeOfYearChange} name="summer" />
                            }
                            label={<WbSunny />}
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={fall} onChange={handleTimeOfYearChange} name="fall" />
                            }
                            label={<Umbrella />}
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
                    required
                    id="outlined-select-currency"
                    select
                    label="Price category"
                    value={values.priceCategory}
                    onChange={handleChange('priceCategory')}
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
                    required
                    id="outlined-select-currency"
                    select
                    label="Ease of organization"
                    value={values.easeOfOrganization}
                    onChange={handleChange('easeOfOrganization')}
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
                        onChange={handleChange('notes')}
                        value={values.notes}
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

            {edit &&
                <>
                    <div>
                        <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
                            <FormLabel component="legend">Been there, done that</FormLabel>
                            <FormGroup aria-label="position" row>
                                <FormControlLabel
                                    control={
                                    <Checkbox checked={values.done} onChange={handleBooleanChange} name="done" />
                                    }
                                    label={'done'}/>
                            </FormGroup>
                        </FormControl>
                    </div>
                    {values.done &&
                        <>
                            <div>
                                <FormControl sx={{ m:1, width: '50ch' }}>
                                    <InputLabel htmlFor="component-outlined">Walking distance</InputLabel>
                                    <OutlinedInput
                                        onChange={handleChange('totalWalkingDistance')}
                                        value={values.totalWalkingDistance || ""}
                                        label={"Total walking distance"}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <Hiking />
                                            </InputAdornment>
                                        }
                                        endAdornment={<InputAdornment position="end">km</InputAdornment>}
                                    />
                                </FormControl>
                            </div>
                            <div>
                                <FormControl sx={{ m:1, width: '50ch' }}>
                                    <InputLabel htmlFor="component-outlined">Actual price</InputLabel>
                                    <OutlinedInput
                                        onChange={handleChange('actualPrice')}
                                        value={values.actualPrice || ""}
                                        label={"Actual price"}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <PriceCheck />
                                            </InputAdornment>
                                        }
                                        endAdornment={<InputAdornment position="end">SEK</InputAdornment>}
                                    />
                                </FormControl>
                            </div>
                        </>
                    }
                </>
            }

        </div>
    )
}

export default AddVisitForm