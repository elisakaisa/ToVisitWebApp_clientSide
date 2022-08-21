import React from 'react'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { MoreHoriz } from '@mui/icons-material'
import VisitTable from '../components/VisitTable'
import SimpleTableHead from '../components/table/SimpleTableHead'
import SimpleTableBody from '../components/table/SimpleTableBody'


const Home = () => {

    let visits = useSelector(state => state.visits)

    return (
        <>
            <Typography variant="h5" component="div" sx= {{ p:1, m:1 }} gutterBottom>
                Places to visit in the Stockholm area
            </Typography>
            <TableContainer components={Paper}>
                    <Table sx={{ minWidth: 650}} aria-label="simple table">
                        <SimpleTableHead />
                        <SimpleTableBody visits={visits}/>
                    </Table>
            </TableContainer>
        </>  
    )
}

export default Home