import Container from "@mui/system/Container"
import Typography from '@mui/material/Typography';
import { Droppable, Draggable } from "react-beautiful-dnd";


export default function JobBoardSelected({savedJobs}) {
  return (
    
    <Container maxWidth="false" sx={{height:"100%", padding:"20px", backgroundColor:"#d8e6ad", borderRadius:"25px"}}>
      <div>
      <Typography variant="subtitle2">
        Saved Jobs
      </Typography>
      <Droppable droppableId="jobFoundSearch">
        {
          (provided)=>(


            <ul  className="jobFoundSearch" {...provided.droppableProps}  ref={provided.innerRef} >

              {
                (savedJobs.length ===0)?
                <Draggable isDragDisabled={true} key="placeholderKey" draggableId="placeholderId" index={99999}>
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
                savedJobs.map((job, index) =>{
                  return(
                    <>
                      <Draggable isDragDisabled={job.isDragDisabled} key={job.id} draggableId={job.id} index={index}>
                        {
                          (provided)=>(
                            <>

                              
                                <li
                                className="jobfound"
                                
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}>

                                  <h4>{job.role}</h4>
                                  <p>salary:{job.salary} </p>
                                  <p>skills:{job.skills} </p>
                                </li>

                                {provided.placeholder}
                            </>
                            
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
