import Container from "@mui/system/Container"
import Typography from '@mui/material/Typography';
import { Droppable, Draggable } from "react-beautiful-dnd";
import Pagination from '@mui/material/Pagination';
import {useRouter} from "next/router"
import {useState} from "react"

export default function JobBoardSearch({jobsApiResult, pageNumber}) {
  const router = useRouter();
  const country = router.query.countryCode;
  const jobRole = router.query.jobTitle;
  const [page, setPage] = useState(1);

  const handlePagiChange = (e, value)=>{
    console.log(e)
    setPage(value);
    router.push(`/${country}/${jobRole}/${value}`)
  }
  return (
    <Container  maxWidth="false"  sx={{height:"100%", padding:"20px", backgroundColor:"#4AACB7", borderRadius:"25px"}}>
      <div>
      <Typography variant="subtitle2">
        Open Positions
      </Typography>

      <Droppable droppableId="jobFoundBoard">
        {
          (provided)=>(
            <ul className="jobFoundBoard styled-overflow" style={{height:"65vh"}} {...provided.droppableProps}  ref={provided.innerRef} >
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
                              <h4>{job.title}</h4>
                              <p>description:{job.description}</p>
                              <p>company:{job.company.display_name}</p>
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
      
      <Pagination defaultPage={pageNumber} showFirstButton page={page} showLastButton size="large" count={20} variant="outlined" onChange={handlePagiChange}/>
      
    </Container>
  )
}