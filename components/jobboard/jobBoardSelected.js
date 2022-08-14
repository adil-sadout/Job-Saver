import Container from "@mui/system/Container"
import Typography from '@mui/material/Typography';
import { Droppable, Draggable } from "react-beautiful-dnd";
import JobBoardJob from "./jobBoardJob"
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
export default function JobBoardSelected({savedJobs, deleteSavedJob}) {
  return (
    
    <Container maxWidth="false"  className="background2" sx={{height:"100%", padding:"20px", borderRadius:"25px"}}>
      <div>
      <Box>
        <Typography variant="subtitle2">
          Saved Jobs: {savedJobs.length}
        </Typography>
        
      </Box>

      <Droppable droppableId="jobFoundSearch">
        {
          (provided)=>(


            <ul  className="jobFoundSearch styled-overflow" style={{height:"75vh"}} {...provided.droppableProps}  ref={provided.innerRef} >

              {
                (savedJobs?.length ===0)?
                <Draggable isDragDisabled={true} key="placeholderKey1" draggableId="placeholderId1" index={999999}>
                        {
                          (provided)=>(
                            <>
                            
                                <li
                                  className="fillerjob"
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}>
                                    <p>drop the positions you want to save here</p>
                                </li>
                                

                                
                            </>
                          )
                        }
                      </Draggable>:
                      null
              }

                      
              
              {
                savedJobs?.map((job, index) =>{
                  return(
                    <>
                      <Draggable isDragDisabled={job.isDragDisabled} key={job.id} draggableId={job.id.toString()} index={index}>
                        {
                          (provided)=>(
                            <li className="jobfound"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}

                            >
                              <Grid item xs={12} sx={{textAlign: "end"}}>
                                  <IconButton sx={{ padding: '1px' }} onClick={(e)=>deleteSavedJob(e, job)} >
                                      <CloseIcon fontSize="small" />
                                  </IconButton>
                              </Grid>

                              <JobBoardJob job={job} />
                            </li>
                            
                          )
                        }
                      </Draggable>
                    </>
                  )
                }
                )
              }
              
              
              {provided.placeholder}
            </ul>
            
          )
          
        }
      </Droppable>
      </div>
    </Container>
  )
}
