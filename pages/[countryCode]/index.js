import {useRouter} from "next/router"
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SearchBarContainer from '../../components/nav/searchBarContainer';

export default function CountryCode() {
    
  const router = useRouter()
  const country = router.query.countryCode



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
                Please make sure to have both fields up
              </Typography>
              <SearchBarContainer />
            </Grid>   
            
          </Grid> 
      </>
  )
}

