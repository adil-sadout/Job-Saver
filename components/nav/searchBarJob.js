import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';



export default function SearchBarJob({jobRole, setJobRole}) {
    return (
      <Paper
        component="form"
        sx={{ padding: '10px', display: 'flex', alignItems: 'center' , borderRadius:"25px", backgroundColor:"#181A1B"}}
      >
        
        <InputBase
          sx={{ ml: 1, flex: 1 , color:"#AAAAAA", fontWeight:"bold"}}
          placeholder="Search Job"
          required
          onChange={(e)=>setJobRole(e.target.value)}
          value={jobRole}
        />
        
        
      </Paper>
    );
}