import React from 'react'
import { useSelector } from 'react-redux'

import Typography from '@mui/material/Typography'
import VisitTable from '../components/VisitTable'


const Home = () => {

    let visits = useSelector(state => state.visits)

    // make a copy of visits to avoid state mutation errors
    let sortedVisits = [...visits].sort((a, b) => a.what.localeCompare(b.what))

    return (
        <>
            <Typography variant="h5" component="div" sx= {{ p:1, m:1 }} gutterBottom>
                Places to visit in the Stockholm area
            </Typography>
            <VisitTable visits={sortedVisits} />
        </>  
    )
}

export default Home