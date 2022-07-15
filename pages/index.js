import Head from 'next/head'
import NavbarContainer from './components/jobboard/jobBoardSearch';
import JobBoardContainer from './components/jobboard/jobBoardSelected';
import SearchBarContainer from './components/nav/searchBarContainer';

import { DragDropContext } from 'react-beautiful-dnd';

import Container from '@mui/system/Container';
import Grid from '@mui/material/Grid';





export default function Home() {
  return (

    <>
      <Head>
        <title>Job Board</title>
        <meta name="description" content="Web3 Job Board" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      <Container maxWidth="lg" sx={{margin:"0 auto"}} >
        
        <Container sx={{margin:"20px auto"}} >
          <SearchBarContainer />
        </Container>

        <Grid container sx={{height:"88vh"}}>

            
                <Grid item xs={6} sm={4} sx={{padding:"5px"}}>
                  <NavbarContainer />
                </Grid>

                <Grid item xs={6} sm={8} sx={{padding:"5px"}}>
                  
                  <DragDropContext>
                    <JobBoardContainer />
                  </DragDropContext>
                  
                </Grid>
            
        </Grid>
      
    </Container>
    </>

    
  )
}
