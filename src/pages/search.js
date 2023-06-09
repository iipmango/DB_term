import './App.css';
import { styled } from '@mui/material/styles'
import { Button, TextField, MenuItem, Box,} from '@mui/material';
import { Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow} from '@mui/material';
import Paper from '@mui/material/Paper';

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
  createData('Kevin Durant', 1421, 1419, 54092, 14152, 28044, 0.504635, 2261, 6563, 0.344507, 8087, 11000, 0.735181, 1666, 9001, 10667, 10420, 2186, 1073, 4966, 2604, 38652),
  createData('Kawai Leonard', 1421, 1419, 54092, 14152, 28044, 0.504635, 2261, 6563, 0.344507, 8087, 11000, 0.735181, 1666, 9001, 10667, 10420, 2186, 1073, 4966, 2604, 38652),
  createData('Paul George', 1421, 1419, 54092, 14152, 28044, 0.504635, 2261, 6563, 0.344507, 8087, 11000, 0.735181, 1666, 9001, 10667, 10420, 2186, 1073, 4966, 2604, 38652),
  createData('Klay Thompson', 1421, 1419, 54092, 14152, 28044, 0.504635, 2261, 6563, 0.344507, 8087, 11000, 0.735181, 1666, 9001, 10667, 10420, 2186, 1073, 4966, 2604, 38652),
  createData('Giannis Antetokounpo', 1421, 1419, 54092, 14152, 28044, 0.504635, 2261, 6563, 0.344507, 8087, 11000, 0.735181, 1666, 9001, 10667, 10420, 2186, 1073, 4966, 2604, 38652),
  createData('Demian Lilard', 1421, 1419, 54092, 14152, 28044, 0.504635, 2261, 6563, 0.344507, 8087, 11000, 0.735181, 1666, 9001, 10667, 10420, 2186, 1073, 4966, 2604, 38652),
  createData('Chris Paul', 1421, 1419, 54092, 14152, 28044, 0.504635, 2261, 6563, 0.344507, 8087, 11000, 0.735181, 1666, 9001, 10667, 10420, 2186, 1073, 4966, 2604, 38652),
  createData('Russel Westbrook', 1421, 1419, 54092, 14152, 28044, 0.504635, 2261, 6563, 0.344507, 8087, 11000, 0.735181, 1666, 9001, 10667, 10420, 2186, 1073, 4966, 2604, 38652),
  createData('Anthony Davis', 1421, 1419, 54092, 14152, 28044, 0.504635, 2261, 6563, 0.344507, 8087, 11000, 0.735181, 1666, 9001, 10667, 10420, 2186, 1073, 4966, 2604, 38652),
  createData('Nikola Jokic', 1421, 1419, 54092, 14152, 28044, 0.504635, 2261, 6563, 0.344507, 8087, 11000, 0.735181, 1666, 9001, 10667, 10420, 2186, 1073, 4966, 2604, 38652),
  createData('Jamal Murray', 1421, 1419, 54092, 14152, 28044, 0.504635, 2261, 6563, 0.344507, 8087, 11000, 0.735181, 1666, 9001, 10667, 10420, 2186, 1073, 4966, 2604, 38652),
  createData('De`aron Fox', 1421, 1419, 54092, 14152, 28044, 0.504635, 2261, 6563, 0.344507, 8087, 11000, 0.735181, 1666, 9001, 10667, 10420, 2186, 1073, 4966, 2604, 38652),
  createData('Ja Morant', 1421, 1419, 54092, 14152, 28044, 0.504635, 2261, 6563, 0.344507, 8087, 11000, 0.735181, 1666, 9001, 10667, 10420, 2186, 1073, 4966, 2604, 38652),
];


function App() {
  return (
    <div>
      <BasicTextFields/>
      <Header/>
    </div>
  )
}

const currencies1 = [
  {
    value: 'player',
    label: 'player'
  },
  {
    value: 'stats',
    label: 'stats'
  },
  {
    value: 'team',
    label: 'team'
  },
]

const currencies2 = [
  {
    value: 'name',
    label: 'name'
  },
  {
    value: 'team',
    label: 'team'
  },
  {
    value: 'position',
    label: 'position'
  },
  {
    value: 'back-number',
    label: 'back-number'
  }
]

function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        justifyContent: 'center',
        display: 'flex',
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-select-currency"
        select
        label="Select Data"
        defaultValue="player"
        helperText="Please select your currency"
      >
      {currencies1.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
      </TextField>
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue="name"
        helperText="Please select your currency"
      >
      {currencies2.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
      </TextField>
      <TextField id="outlined-basic" variant="outlined" />
      <Button 
        variant="contained" 
        sx = {{
          height: 54
        }}
        >검색</Button>
    </Box>
  );
}

function Header() {
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

export default App;