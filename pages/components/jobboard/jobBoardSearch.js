import Container from "@mui/system/Container"
import Typography from '@mui/material/Typography';
import { Droppable, Draggable } from "react-beautiful-dnd";

export default function JobBoardSearch({jobsApiResult}) {
  return (
    <Container  maxWidth="false"  sx={{height:"100%", padding:"20px", backgroundColor:"#e6d8ad", borderRadius:"25px"}}>
      <div>
      <Typography variant="subtitle2">
        Open Positions
      </Typography>

      <Droppable droppableId="jobFoundBoard">
        {
          (provided)=>(
            <ul  className="jobFoundBoard" {...provided.droppableProps}  ref={provided.innerRef} >
              {
                jobsApiResult.map((job, index) =>{
                  return(
                    <>
                      <Draggable isDragDisabled={job.isDragDisabled} key={job.id} draggableId={job.id} index={index}>
                        {
                          (provided)=>(
                            <li className="jobfound"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}

                            >
                              <h4>{job.role}</h4>
                              <p>salary:{job.salary} </p>
                              <p>skills:{job.skills} </p>
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