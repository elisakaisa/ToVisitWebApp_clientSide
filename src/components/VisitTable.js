import React, { useState, useEffect } from 'react'

import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { TableHead, TableSortLabel } from '@mui/material'

import SimpleTableBody from './table/SimpleTableBody'


const VisitTable = ({ visits }) => {

    // states
    const [sortedVisits, setSortedVisits] = useState(visits)
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('what')

    // ma  kes sure the state is actually saved, otherwise empty array
    useEffect(() => {
        setSortedVisits(visits)
    },[visits]) 

    // TODO: figure out a nicer way
    const onSortWhat = () => {
        if (order === 'asc') {
            setSortedVisits([...visits].sort((a, b) => a.what.localeCompare(b.what)))
        } else {
            setSortedVisits([...visits].sort((a, b) => b.what.localeCompare(a.what)))
        }
        const isAsc = orderBy === 'what' && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy('what')
    }
    const onSortWhere = () => {
        if (order === 'asc') {
            setSortedVisits([...visits].sort((a, b) => a.where.localeCompare(b.where)))
        } else {
            setSortedVisits([...visits].sort((a, b) => b.where.localeCompare(a.where)))
        }
        const isAsc = orderBy === 'where' && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy('where')
    }

    return (
        <Paper elevation={3} sx= {{ p:1, backgroundColor: '#040a1a' }}>
                <TableContainer components={Paper}>
                    <Table sx={{ minWidth: 650}} aria-label="simple table">
                    <TableHead>
                            <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: 'h7.fontSize'}}>
                                <TableSortLabel 
                                    onClick={onSortWhat}
                                    active={orderBy === 'what'}
                                    direction={orderBy === 'what' ? order : 'asc'}>
                                        What
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: 'bold', fontSize: 'h7.fontSize'}}>
                                <TableSortLabel 
                                    onClick={onSortWhere}
                                    active={orderBy === 'where'}
                                    active={orderBy === 'where'}
                                    direction={orderBy === 'where' ? order : 'asc'}>
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
            </Paper>
    )
}

export default VisitTable