import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'
import { MoreHoriz } from '@mui/icons-material'
import { TableSortLabel } from '@mui/material'

import SimpleTableHead from './table/SimpleTableHead'
import SimpleTableBody from './table/SimpleTableBody'


const VisitTable = ({ visits }) => {

    return (
        <Paper elevation={3} sx= {{ p:1, backgroundColor: '#040a1a' }}>
                <TableContainer components={Paper}>
                    <Table sx={{ minWidth: 650}} aria-label="simple table">
                        <SimpleTableHead />
                        <SimpleTableBody visits={visits}/>
                    </Table>
                </TableContainer>
            </Paper>
    )
}

export default VisitTable