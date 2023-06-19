import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer } from '@mui/material';

function TableContainerComponent({ columnNames, tableData }) {
  console.log(columnNames, tableData);
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {/* 열 제목을 동적으로 추가합니다 */}
            {columnNames.map((columnName, index) => (
              <TableCell key={index}>{columnName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
              {tableData.map((row, index) => (
              <TableCell key={index}>{row}</TableCell>
              // 각 셀의 데이터를 동적으로 추가합니다
          ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableContainerComponent;
