import Head from 'next/head'
import {useEffect, useState} from "react"

import JobBoardSearch from './components/jobboard/jobBoardSearch';

import JobBoardSelected from './components/jobboard/jobBoardSelected';

import SearchBarContainer from './components/nav/searchBarContainer';

import { DragDropContext } from 'react-beautiful-dnd';


import Container from '@mui/system/Container';
import Grid from '@mui/material/Grid';



export default function Home() {

  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
      
      setwinReady(true);
        
    }, []);

    const [savedJobs, setSavedJobs] = useState([
      {
        id:"savedjob1",
        role:"saved: Junior FE",
        skills:"reactjs",
        salary:"120k",
        isDragDisabled:true
      },
      {
        id:"savedjob2",
        role:"saved: Full FE2",
        skills:"reactjs",
        salary:"150k",
        isDragDisabled:true
      },
      {
        id:"savedjob3",
        role:"saved: Full FE3",
        skills:"reactjs",
        salary:"150k",
        isDragDisabled:true
      }
    ]);

    const [jobsApiResult, setJobsApiResult] = useState([
      {
        id:"job1",
        role:"Junior FE",
        skills:"reactjs",
        salary:"120k",
        isDragDisabled:false
      },
      {
        id:"job2",
        role:"Sr Full Stack",
        skills:"reactjs, mongoDB",
        salary:"180k",
        isDragDisabled:false
      },
      {
        id:"job3",
        role:"Mid Backend",
        skills:"Sql",
        salary:"135k",
        isDragDisabled:false
      },
      {
        id:"job4",
        role:"Full FE2",
        skills:"reactjs",
        salary:"150k",
        isDragDisabled:false
      },
      {
        id:"job5",
        role:"Full FE3",
        skills:"reactjs",
        salary:"150k",
        isDragDisabled:false
      },
    ])
  

  const handleDragEnd = (result)=>{
    
    const searchedJobs = Array.from(jobsApiResult)
    const newSavedJobs = Array.from(savedJobs)

    const {destination, source, draggableId} = result;
    if(!destination){
      return;
    }
    if(
      destination.droppableId === source.droppableId &&
      destination.index=== source.index
    ){
      return;
    }
    if(
      destination.droppableId==="jobFoundBoard"
    ){
      return;
    }

    
    const [draggedJob] = searchedJobs.splice(result.source.index, 1)
    draggedJob.isDragDisabled=true;
    newSavedJobs.splice(result.destination.index, 0, draggedJob)
    const newJobApiList = searchedJobs.map(job =>{
      if (job.id!==draggedJob.id){
        return job
      }
    })


    
    setJobsApiResult(newJobApiList)
    setSavedJobs(newSavedJobs)
    


      
    
  }
  


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

          {
            winReady ?
              <DragDropContext onDragEnd={handleDragEnd}>
                  <Grid item xs={6} sm={6} sx={{padding:"5px"}}>
                    <JobBoardSearch jobsApiResult={jobsApiResult} />
                  </Grid>
                  <Grid item xs={6} sm={6} sx={{padding:"5px"}}>
                  
                  
                    <JobBoardSelected savedJobs={savedJobs} />
                  
                  
                </Grid>
              </DragDropContext>:
              <p>Error loading the dashboard, please try again later</p>
          }

          

                
          
            
        </Grid>
      
    </Container>
    </>

    
  )
}







