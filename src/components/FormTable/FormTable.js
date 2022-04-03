import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import tableApi from '../../api/tableApi'
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#dadada',
        color: '#20242b',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));





function FormTable() {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const fetchTable = async () => {
            const tableList = await tableApi.getAll()
            setUsers(tableList)
        }
        fetchTable()
    }, [])
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell >receipt_number</StyledTableCell>
                        <StyledTableCell align="right">subject</StyledTableCell>
                        <StyledTableCell align="right">document_no</StyledTableCell>
                        <StyledTableCell align="right">reception_date</StyledTableCell>
                        <StyledTableCell align="right">receptionist</StyledTableCell>
                        <StyledTableCell align="right">reception_category</StyledTableCell>
                        <StyledTableCell align="right">sender</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((item) => (
                        < StyledTableRow key={item.id} align="right" >
                            <StyledTableCell >
                                {item.receipt_number}
                            </StyledTableCell>
                            <StyledTableCell align="right">{item.subject}</StyledTableCell>
                            <StyledTableCell align="right">{item.document_no}</StyledTableCell>
                            <StyledTableCell align="right">{item.reception_date}</StyledTableCell>
                            <StyledTableCell align="right">{item.receptionist}</StyledTableCell>
                            <StyledTableCell align="right">{item.reception_category}</StyledTableCell>
                            <StyledTableCell align="right">{item.sender}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}
export default FormTable;
