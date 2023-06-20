import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper } from '@mui/material';
import ImageLoad from './ImageLoad';

function TableContainerComponent({ columnNames, tableData }) {
  return (
    <TableContainer>
      <Table>
        <TableHead >
          <TableRow>
            {columnNames.map((columnName, index) => (
              <TableCell key={index} sx={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>{columnName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody >
            {tableData.map((row, rowIndex) => (
              <TableRow key={rowIndex} >
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex} sx={{textAlign: 'center', fontSize: 15}}>
                    {typeof cell === 'object' ? ImageLoad(cell) : cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableContainerComponent;
