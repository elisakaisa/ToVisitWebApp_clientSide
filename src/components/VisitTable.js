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


const VisitTable = ({ visits }) => {

    return (
        <Paper elevation={3} sx= {{ p:1, backgroundColor: '#040a1a' }}>
                <TableContainer components={Paper}>
                    <Table sx={{ minWidth: 650}} aria-label="simple table">
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
                        <TableBody>
                            {visits.map(visit => (
                                <TableRow
                                    key={visit.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell component="th" scope="row">
                                        <Link
                                            underline="hover"
                                            sx={{ display: 'flex', alignItems: 'center' }}
                                            color="inherit"
                                            component={RouterLink}
                                            to={`/visits/${visit.id}`}>
                                                {visit.what}&nbsp;
                                                <MoreHoriz sx={{ mr: 0.5 }} fontSize="inherit" />
                                        </Link>
                                    </TableCell>
                                    <TableCell align="left">{visit.where}</TableCell>
                                    <TableCell align="center">
                                        {visit.category.map(cat => 
                                            <div key={cat}> 
                                                <Link
                                                    underline="hover"
                                                    sx={{ display: 'flex', alignItems: 'center' }}
                                                    color="inherit"
                                                    component={RouterLink}
                                                    to={`/visits/category/${cat}`}>
                                                        {cat}
                                                    </Link>
                                            </div> )}
                                    </TableCell>
                                    <TableCell align="center">{visit.priceCategory}</TableCell>
                                    <TableCell align="center">{visit.easeOfOrganization}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
    )
}

export default VisitTable