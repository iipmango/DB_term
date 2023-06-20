import React from 'react';
import { useState } from 'react';
import { Button, TextField, MenuItem, Box,} from '@mui/material';
import TableContainerComponent from './TableContainerComponent';
import axios from 'axios'


const FirstSelect = [
    {
      value: "players",
      label: "players"
    },
    {
      value: "player_stats",
      label: "stats"
    },
    {
      value: "teams",
      label: "teams"
    },
  ]
  
const Second_Select = {
    players: [
        {value: 'player_name',label: 'player_name'},
        {value: 'player_team',label: 'player_team'},
        {value: 'player_position',label: 'player_position'},
    ],
    player_stats: [
        {value: 'name',label: 'name'}
    ],
    teams: [
        {value: 'team_name',label: 'team_name'},
        {value: 'city',label: 'team_city'},
        {value: 'abbreviation',label: 'team_abbreviation'}
    ]
}

function BasicTextFields() {
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [tableData, setTableData] = useState([]);
    const [columnNames, setColumnNames] = useState([]);
  
    const handleFirstMenuItemChange = (event) => {
      setSelectedOption1(event.target.value);
      setSelectedOption2(''); // Reset the second menu item value
    };
  
    const handleSecondMenuItemChange = (event) => {
      setSelectedOption2(event.target.value);
    };

    const handleInputValue = (event) => {
      setInputValue(event.target.value);
    }

    const onKeyDown = (e) => {
      if(e.key === 'Enter') {
        handleSearch();
      }
    }

    const handleSearch = () => {
      axios.get(`http://localhost:3010/${selectedOption1}?attributeName=${selectedOption2}&attributeValue=${inputValue}`)
        .then((response) => {
          const data = response.data
          const dataArr = data.map(row => Object.values(row))
          console.log(dataArr.map(row => row.map(cell => typeof cell)))
          setTableData(dataArr);
        })
        .catch((error) => {
          console.log(error);
        });
      axios.get(`http://localhost:3010/column?attributeName=${selectedOption1}`)
        .then((response) => {
          const Column = response.data;
          const columnNames = Column.map(row => row.COLUMN_NAME);
          selectedOption2 === 'player_team'? columnNames.push('team_name'):console.log('insert team_name');
          selectedOption1 === 'player_stats'? columnNames.unshift('player_name') : selectedOption1 === 'players'? columnNames.push('image'):console.log('skip');
          setColumnNames(columnNames);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Box
        component="form"
        sx={{
          justifyContent: 'center',
          display: 'flex',
          '& > :not(style)': { m: 1, width: '25ch' },
          position: 'fixed', top: 0, width: '100%' 
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-select-currency1"
          select
          label="Select Data"
          value={selectedOption1}
          onChange={handleFirstMenuItemChange}
          helperText="Please select your currency"
        >
        {FirstSelect.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
        </TextField>
        <TextField
          id="outlined-select-currency2"
          select
          label="Select"
          value={selectedOption2}
          onChange={handleSecondMenuItemChange}
          helperText="Please select your currency"
        >
        {Second_Select[selectedOption1]?.map((FirstSelect) => (
          <MenuItem key={FirstSelect.value} value={FirstSelect.value}>
            {FirstSelect.label}
          </MenuItem>
        ))}
        </TextField>
        <TextField id="outlined-basic" variant="outlined" value={inputValue} onChange={handleInputValue} onKeyDown={onKeyDown}/>
        <Button 
          onClick={handleSearch}
          variant="contained" 
          sx = {{
              height: 54
          }}
        >검색</Button>
        </Box>
        <Box sx={{
          marginTop: "7%",
            overflow: 'auto',
            position: 'fixed',
            top: 0,
            width: '100%', 
            height: '100%'}}>
          <TableContainerComponent columnNames={columnNames} tableData={tableData} />
        </Box>
    </div>
    );
  }
  
  export default BasicTextFields;