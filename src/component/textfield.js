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
        {value: 'team_city',label: 'team_city'},
        {value: 'team_abbreviation',label: 'team_abbreviation'}
    ]
}

function BasicTextFields() {
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [tableData, setTableData] = useState([]);
    const [columnName, setColumnName] = useState([]);
  
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

    const handleSearch = () => {
      // 데이터베이스 조회 요청을 보내고, 응답 받은 데이터를 처리합니다.
      // axios.get(`http://ipmango.synology.me:5010/${selectedOption1}?attributeName=${selectedOption2}attributeValue=${inputValue}`)
      axios.get(`http://localhost:3010/${selectedOption1}?attributeName=${selectedOption2}&attributeValue=${inputValue}`)
        .then((response) => {
          // 응답 데이터를 확인하고 원하는 형태로 가공합니다.
          const data = response.data;
          console.log(data);
          setTableData(data)
        })
        .catch((error) => {
          // 에러 처리 로직을 구현합니다.
          console.log(error);
        });
      axios.get(`http://localhost:3010/column?attributeName=${selectedOption1}`)
        .then((response) => {
          const Column = response.data;
          const columnName = Column.map(row => row.COLUMN_NAME);
          console.log(columnName);
          setColumnName(columnName);
        })
        .catch((error) => {
          // 에러 처리 로직을 구현합니다.
          console.log(error);
        });
    };

    return (
    <div>
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
        <TextField id="outlined-basic" variant="outlined" value={inputValue} onChange={handleInputValue} />
        <Button 
            onClick={handleSearch}
            variant="contained" 
            sx = {{
                height: 54
            }}
        >검색</Button>
        </Box>
        <TableContainerComponent columnNames={columnName} tableData={tableData} />
    </div>
    );
  }
  
  export default BasicTextFields;