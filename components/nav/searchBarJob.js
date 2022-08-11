import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';



export default function SearchBarJob({jobRole, setJobRole}) {
    return (
      <Paper
        component="form"
        sx={{ height:"100%",display: 'flex', alignItems: 'center'}}
      >
        
        <InputBase
          sx={{ ml: 1, flex: 1 , color:"black", fontWeight:"bold"}}
          placeholder="Search Job"
          required
          onChange={(e)=>setJobRole(e.target.value)}
          value={jobRole}
        />
        
        
      </Paper>
    );
}