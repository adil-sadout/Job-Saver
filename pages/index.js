import Head from 'next/head'


import SearchBarContainer from '../components/nav/searchBarContainer';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';



export default function Home({}) {


  return (
    <>
      <Head>
        <title>Job Board</title>
        <meta name="description" content="Web3 Job Board" />
        <link rel="icon" href="/favicon.ico" />
      </Head>   

      
        
        <Grid
          container
          spacing={0}
          
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '80vh' }}
        >

          <Grid item xs={10}>
            <Typography variant='h3'  color={"white"} sx={{padding:"20px 0"}}>
              Search your next job
            </Typography>
            <SearchBarContainer />
          </Grid>   
          
        </Grid> 
      
    </>

    
  )
}


export async function getServerSideProps(context) {

  

  

  return {
    props: {}, // will be passed to the page component as props
  }
}







