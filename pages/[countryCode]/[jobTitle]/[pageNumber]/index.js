import {useRouter} from "next/router"
import Grid from '@mui/material/Grid';
import { DragDropContext } from 'react-beautiful-dnd';
import JobBoardSearch from '../../../../components/jobboard/jobBoardSearch';
import JobBoardSelected from '../../../../components/jobboard/jobBoardSelected';
import SearchBarContainer from '../../../../components/nav/searchBarContainer';
import {useEffect, useState} from "react"
import Container from '@mui/system/Container';

export default function JobTitle({fetchedData}) {

    const router = useRouter()
    const pageNumber = router.query.pageNumber
    
    const [savedJobs, setSavedJobs] = useState([]);
    const [jobsApiResult, setJobsApiResult] = useState([])
    const [winReady, setwinReady] = useState(false);
    
    useEffect(() => {
        setwinReady(true);
    }, []);

    useEffect(()=>{
        setJobsApiResult(fetchedData.results) 
        //console.log(jobsApiResult)
    },[pageNumber])

    

    //console.log(pageNumber)
    //console.log(fetchedData)


    const deleteSavedJob = (e, job)=>{
      e.preventDefault()
      //console.log(job)
      const newSavedJobArray = savedJobs.filter(savedJob =>{
        
        if (savedJob.id === job.id){
          return 
        }
        return savedJob
      })
      //console.log(newSavedJobArray)
      setSavedJobs(newSavedJobArray);
    }


  

    
    const handleDragEnd = (result)=>{
        
        const searchedJobs = Array.from(jobsApiResult)
        const newSavedJobs = Array.from(savedJobs)
        const {destination, source} = result;

    
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
        /***remove duplicate from newsavedjobs array
        let uniqueArray = newSavedJobs.filter(function(item, pos) {
          return newSavedJobs.indexOf(item) == pos;
      })***/
        
        setJobsApiResult(newJobApiList)
        setSavedJobs(newSavedJobs)
        
      }


      

      
    


    return (
        <Container maxWidth="lg" sx={{margin:"0 auto"}} >
            <Container sx={{margin:"20px auto"}} >
                <SearchBarContainer />
            </Container>
            <Grid container sx={{height:"88vh"}}>
            {
                winReady ?
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Grid item xs={12} sm={6} sx={{padding:"5px"}}>
                        <JobBoardSearch jobsApiResult={jobsApiResult} pageNumber={pageNumber}/>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{padding:"5px"}}>
                        <JobBoardSelected savedJobs={savedJobs} deleteSavedJob={deleteSavedJob}/>
                    </Grid>
                </DragDropContext>:
                <p>Error loading the dashboard, please try again later</p>
            }
            </Grid>
        </Container>
    )
}


export async function getServerSideProps(context) {
  
  const params = context.params

  const fetchUrl = `https://api.adzuna.com/v1/api/jobs/${params.countryCode}/search/${params.pageNumber}?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&what=${params.jobTitle}`
  
  const response = await fetch(fetchUrl)
  const fetchedData = await response.json()

  return {
    props: {fetchedData}, // will be passed to the page component as props
  }
}
  