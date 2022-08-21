import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Link from '@mui/material/Link'
import { MoreHoriz } from '@mui/icons-material'

const SimpleTableBody = ({ visits }) => {
    return (
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
    )
}

export default SimpleTableBody