import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link'
import { MoreHoriz } from '@mui/icons-material';


const Home = () => {

    let visits = useSelector(
        state => state.visits
    )

    return (
        <TableContainer components={Paper}>
            <Table sx={{ minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell>What</TableCell>
                    <TableCell align="right">Where</TableCell>
                    <TableCell align="right">Category</TableCell>
                    <TableCell align="right">Price</TableCell>
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
                            <TableCell align="right">{visit.where}</TableCell>
                            <TableCell align="right">
                                {visit.category.join(', ')} 
                            </TableCell>
                            <TableCell align="right">{visit.priceCategory}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        

        </TableContainer>
    )
}

export default Home