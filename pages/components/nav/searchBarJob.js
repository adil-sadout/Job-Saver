import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';



export default function SearchBar() {
    return (
      <Paper
        component="form"
        sx={{ padding: '10px', display: 'flex', alignItems: 'center' , borderRadius:"25px"}}
      >
        
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Job"
          
        />
        
        
      </Paper>
    );
}