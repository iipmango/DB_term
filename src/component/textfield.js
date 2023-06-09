import React from 'react';
import { useState } from 'react';
import { Button, TextField, MenuItem, Box,} from '@mui/material';


const FristSelect = [
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
  
const Second_Select = {
    player: [
        {value: 'name',label: 'name'},
        {value: 'team',label: 'team'},
        {value: 'position',label: 'position'},
        {value: 'back-number',label: 'back-number'}
    ],
    stats: [
        {value: 'name',label: 'name'}
    ],
    team: [
        {value: 'team_name',label: 'team_name'},
        {value: 'city',label: 'city'},
        {value: 'abbreviation',label: 'abbreviation'}
    ]
}
  
function BasicTextFields() {
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');

    const handleFirstMenuItemChange = (event) => {
        setSelectedOption1(event.target.value);
        setSelectedOption2(''); // Reset the second menu item value
    };

    const handleSecondMenuItemChange = (event) => {
        setSelectedOption2(event.target.value); 
    };
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
          id="outlined-select-currency1"
          select
          label="Select Data"
          value={selectedOption1}
          onChange={handleFirstMenuItemChange}
          helperText="Please select your currency"
        >
        {FristSelect.map((option) => (
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
        {Second_Select[selectedOption1]?.map((FristSelect) => (
          <MenuItem key={FristSelect.value} value={FristSelect.value}>
            {FristSelect.label}
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
  
  export default BasicTextFields;