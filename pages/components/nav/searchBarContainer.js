import SearchBarJob from "./SearchBarJob"
import SearchBarLocation from "./SearchBarLocation"
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
function SearchBarContainer() {
  return (
    <Grid container spacing={0.5} sx={{margin:"0 auto"}}>
        <Grid item xs={5}>
            <SearchBarJob />
        </Grid>
        <Grid item xs={5}>
            <SearchBarLocation />
        </Grid>
        <Grid item xs={2} sx={{margin:"0 auto"}}>
            <IconButton sx={{ padding: '15px' , backgroundColor:"white" }}>
                <SearchIcon />
            </IconButton>
        </Grid>
        
        
    </Grid>
  )
}

export default SearchBarContainer