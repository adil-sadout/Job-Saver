import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


export default function SearchBarLocation({setCountry, country}) {
    return (
      <Paper
        component="form"
        sx={{ display: 'flex', alignItems: 'center' , border:"none"}}
      >
        
        

        <>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select-standard-label"
          value={country}
          label="Location"
          onChange={(e)=>setCountry(e.target.value)}
        >
          <MenuItem value="us">United States</MenuItem>
          <MenuItem value="ca">Canada</MenuItem>
          <MenuItem value="gb">United Kingdom</MenuItem>
          <MenuItem value="au">Australia</MenuItem>
          <MenuItem value="de">Germany</MenuItem>
          <MenuItem value="at">Austria</MenuItem>
          <MenuItem value="br">Brazil</MenuItem>
          <MenuItem value="fr">France</MenuItem>
          <MenuItem value="in">India</MenuItem>
          <MenuItem value="it">Italy</MenuItem>
          <MenuItem value="nl">Netherlands</MenuItem>
          <MenuItem value="nz">New Zealand</MenuItem>
          <MenuItem value="pl">Poland</MenuItem>
          <MenuItem value="ru">Russia</MenuItem>
          <MenuItem value="sg">Singapore</MenuItem>
          <MenuItem value="za">South Africa</MenuItem>
        </Select>
        </>
        
        
      </Paper>
    );
}