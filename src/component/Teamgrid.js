import React from 'react';
import { Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow} from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      borderLeft: '1px solid black',
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
  
  function createData(player_name, games_played, games_started, minutes_played, field_goals_made, field_goals_attempted, field_goal_pct, three_pointers_made, three_pointers_attempted, three_point_pct, free_throws_made, free_throws_attempted, free_throw_pct, offensive_rebounds, defensive_rebounds, total_rebounds, assists, steals, blocks, turnovers, fouls, points) {
    return { player_name, games_played, games_started, minutes_played, field_goals_made, field_goals_attempted, field_goal_pct, three_pointers_made, three_pointers_attempted, three_point_pct, free_throws_made, free_throws_attempted, free_throw_pct, offensive_rebounds, defensive_rebounds, total_rebounds, assists, steals, blocks, turnovers, fouls, points };
  }
  
  const rows = [
    createData('Lebron James', 1421, 1419, 54092, 14152, 28044, 0.504635, 2261, 6563, 0.344507, 8087, 11000, 0.735181, 1666, 9001, 10667, 10420, 2186, 1073, 4966, 2604, 38652),
    createData('Stephen Curry', 1421, 1419, 54092, 14152, 28044, 0.504635, 2261, 6563, 0.344507, 8087, 11000, 0.735181, 1666, 9001, 10667, 10420, 2186, 1073, 4966, 2604, 38652),
    ];
  
function Teamgrid() {
    return (
      <div class="head">
        <TableContainer component={Paper} sx={{maxHeight:481 }}>
          <Table sx={{ minWidth: 700}} aria-label="customized table">
            <TableHead sx={{position: 'sticky', top: 0}} aria-label="customized table">
              <TableRow>
                <StyledTableCell >player_name</StyledTableCell>
                <StyledTableCell align="center">games_played</StyledTableCell>
                <StyledTableCell align="center">games_started</StyledTableCell>
                <StyledTableCell align="center">minutes_played&nbsp;(min)</StyledTableCell>
                <StyledTableCell align="center">field_goals_made</StyledTableCell>
                <StyledTableCell align="center">field_goals_attempted</StyledTableCell>
                <StyledTableCell align="center">field_goal_pct&nbsp;(%)</StyledTableCell>
                <StyledTableCell align="center">three_pointers_made</StyledTableCell>
                <StyledTableCell align="center">three_pointers_attempted</StyledTableCell>
                <StyledTableCell align="center">three_point_pct&nbsp;(%)</StyledTableCell>
                <StyledTableCell align="center">free_throws_made</StyledTableCell>
                <StyledTableCell align="center">free_throws_attempted</StyledTableCell>
                <StyledTableCell align="center">free_throw_pct&nbsp;(%)</StyledTableCell>
                <StyledTableCell align="center">offensive_rebounds</StyledTableCell>
                <StyledTableCell align="center">defensive_rebounds</StyledTableCell>
                <StyledTableCell align="center">total_rebounds</StyledTableCell>
                <StyledTableCell align="center">assists</StyledTableCell>
                <StyledTableCell align="center">steals</StyledTableCell>
                <StyledTableCell align="center">blocks</StyledTableCell>
                <StyledTableCell align="center">turnovers</StyledTableCell>
                <StyledTableCell align="center">fouls</StyledTableCell>
                <StyledTableCell align="center">points</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody sx = {{minwidth: 700, overflow: 'auto'}}>
              {rows.map((row) => (
                <StyledTableRow key={row.player_name}>
                  <StyledTableCell component="th" scope="row">
                    {row.player_name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.games_played}</StyledTableCell>
                  <StyledTableCell align="center">{row.games_started}</StyledTableCell>
                  <StyledTableCell align="center">{row.minutes_played}</StyledTableCell>
                  <StyledTableCell align="center">{row.field_goals_made}</StyledTableCell>
                  <StyledTableCell align="center">{row.field_goals_attempted}</StyledTableCell>
                  <StyledTableCell align="center">{row.field_goal_pct}</StyledTableCell>
                  <StyledTableCell align="center">{row.three_pointers_made}</StyledTableCell>
                  <StyledTableCell align="center">{row.three_pointers_attempted}</StyledTableCell>
                  <StyledTableCell align="center">{row.three_point_pct}</StyledTableCell>
                  <StyledTableCell align="center">{row.free_throws_made}</StyledTableCell>
                  <StyledTableCell align="center">{row.free_throws_attempted}</StyledTableCell>
                  <StyledTableCell align="center">{row.free_throw_pct}</StyledTableCell>
                  <StyledTableCell align="center">{row.offensive_rebounds}</StyledTableCell>
                  <StyledTableCell align="center">{row.defensive_rebounds}</StyledTableCell>
                  <StyledTableCell align="center">{row.total_rebounds}</StyledTableCell>
                  <StyledTableCell align="center">{row.assists}</StyledTableCell>
                  <StyledTableCell align="center">{row.steals}</StyledTableCell>
                  <StyledTableCell align="center">{row.blocks}</StyledTableCell>
                  <StyledTableCell align="center">{row.turnovers}</StyledTableCell>
                  <StyledTableCell align="center">{row.fouls}</StyledTableCell>
                  <StyledTableCell align="center">{row.points}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  }

  export default Teamgrid;