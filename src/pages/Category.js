import React from 'react'
import VisitTable from '../components/VisitTable'
import Typography from '@mui/material/Typography'

const Category = ({visits, filteredBy}) => {
    return (
        <>
            <Typography variant="h6" component="div" sx= {{ p:1, m:1 }} gutterBottom>
                Visits filtered by category: {filteredBy}
            </Typography>
            <VisitTable visits={visits} sorting={false} />
        </>
    )
}

export default Category