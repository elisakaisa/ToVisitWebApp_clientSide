import React from 'react'

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

const Search = ({visits}) => {

    return (
        <div>
            <Paper elevation={3}>
                <TableContainer components={Paper}>
                    <Table sx={{ minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: 'h7.fontSize'}}>What</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: 'h7.fontSize'}}>Where</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: 'h7.fontSize'}}>Category</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: 'h7.fontSize'}}>Price</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: 'h7.fontSize'}}>Ease of organization</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {visits.map(visit => (
                                <TableRow
                                    key={visit.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell component="th" scope="row">
                                       {visit.what}
                                    </TableCell>
                                    <TableCell align="right">{visit.where}</TableCell>
                                    <TableCell align="right">
                                        {visit.category.map(cat => 
                                            <div key={cat}> 
                                                        {cat}
                                            </div> )}
                                    </TableCell>
                                    <TableCell align="right">{visit.priceCategory}</TableCell>
                                    <TableCell align="right">{visit.easeOfOrganization}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
}

export default Search