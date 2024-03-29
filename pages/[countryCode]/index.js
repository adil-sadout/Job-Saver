import {useRouter} from "next/router"
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SearchBarContainer from '../../components/nav/searchBarContainer';

export default function CountryCode() {
    
 



  return (
      <>
          <Grid
            container
            spacing={0}
            
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '80vh' }}
          >

            <Grid item xs={10}>
              <Typography variant='subtitle1' align="center" color={"white"} sx={{padding:"10px 0"}}>
                An error has occured, Please try again later...
              </Typography>
              <SearchBarContainer />
            </Grid>   
            
          </Grid> 
      </>
  )
}

