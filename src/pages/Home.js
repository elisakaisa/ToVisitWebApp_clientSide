import React, { useState, useEffect } from 'react'
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
import SimpleTableHead from '../components/table/SimpleTableHead'
import SimpleTableBody from '../components/table/SimpleTableBody'
import { TableSortLabel } from '@mui/material'


const Home = () => {

    let visits = useSelector(state => state.visits)

    const [sortedVisits, setSortedVisits] = useState(visits)

    // makes sure the state is actually saved, otherwise empty array
    useEffect(() => {
        setSortedVisits(visits)
    },[visits]) 

    // TODO: figure out a nicer way
    const onSortWhat = () => {
        setSortedVisits([...visits].sort((a, b) => a.what.localeCompare(b.what)))
    }
    const onSortWhere = () => {
        setSortedVisits([...visits].sort((a, b) => a.where.localeCompare(b.where)))
    }


    return (
        <>
            <Typography variant="h5" component="div" sx= {{ p:1, m:1 }} gutterBottom>
                Places to visit in the Stockholm area
            </Typography>
            <TableContainer components={Paper}>
                    <Table sx={{ minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: 'h7.fontSize'}}>
                                <TableSortLabel onClick={onSortWhat}>
                                    What
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold', fontSize: 'h7.fontSize'}}>
                                <TableSortLabel onClick={onSortWhere}>
                                    Where
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold', fontSize: 'h7.fontSize'}}>Category</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: 'h7.fontSize'}}>Price</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: 'h7.fontSize'}}>Ease of organization</TableCell>
                            </TableRow>
                        </TableHead>
                        <SimpleTableBody visits={sortedVisits}/>
                    </Table>
            </TableContainer>
        </>  
    )
}

export default Home