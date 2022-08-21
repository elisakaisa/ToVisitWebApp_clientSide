import React from 'react'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

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