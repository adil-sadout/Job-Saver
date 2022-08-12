import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function JobBoardJob({job}) {
  return (
    <>
        <h4>{job.title}</h4>
        <Grid className="jobfound-info-container">
            <Grid item  className="jobfound-info">
                <h5>Company:</h5>
                <p>{job.company.display_name}</p>
            </Grid>
            <Grid item className="jobfound-info">
                <h5>Location:</h5>
                <p>{job.location.display_name}</p>
            </Grid>
        </Grid>
        <div>
        <h5>Desc:</h5>
        <p>{job.description.slice(0,200)}...</p>
        </div>
        <Box sx={{display:"flex", justifyContent:"center", marginTop:"25px"}}>
            <Link sx={{width:"100%", color:"white"}} href={job.redirect_url} underline="none" target="_blank" rel="noreferrer" >
                <Button sx={{width:"100%"}} color="secondary"  size="large" variant="contained">
                    
                        Apply
                    
                </Button>
            </Link>
        </Box>
        

    </>
  )
}