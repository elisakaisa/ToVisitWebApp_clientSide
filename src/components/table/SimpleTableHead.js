import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'
import { MoreHoriz } from '@mui/icons-material'
import { TableSortLabel } from '@mui/material'

const SimpleTableHead = () => {
    return (
        <TableHead>
            <TableRow>
            <TableCell sx={{ fontWeight: 'bold', fontSize: 'h7.fontSize'}}>Where
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: 'bold', fontSize: 'h7.fontSize'}}>What
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: 'bold', fontSize: 'h7.fontSize'}}>Category</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: 'h7.fontSize'}}>Price</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: 'h7.fontSize'}}>Ease of organization</TableCell>
            </TableRow>
        </TableHead>
    )
}

export default SimpleTableHead