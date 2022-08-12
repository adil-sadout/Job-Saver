import Container from "@mui/system/Container"
import Typography from '@mui/material/Typography';
import { Droppable, Draggable } from "react-beautiful-dnd";
import Pagination from '@mui/material/Pagination';
import {useRouter} from "next/router"
import {useState} from "react"
import JobBoardJob from "./jobBoardJob"

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
    <Container  maxWidth="false" className="background2" sx={{height:"100%", padding:"20px", borderRadius:"25px"}}>
      <div>
      <Typography variant="subtitle2">
        Open Positions
      </Typography>

      <Droppable droppableId="jobFoundBoard">
        {
          (provided)=>(
            <ul className="jobFoundBoard styled-overflow" style={{height:"65vh"}} {...provided.droppableProps}  ref={provided.innerRef} >
              {
                (jobsApiResult?.length ===0)?
                <Draggable isDragDisabled={true} key="placeholderKey2" draggableId="placeholderId2" index={99999}>
                        {
                          (provided)=>(
                            <>
                            
                                <li
                                  className="fillerjob"
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}>
                                    <p>No Jobs left</p>
                                </li>
                                

                                
                            </>
                          )
                        }
                      </Draggable>:
                      null
              }
              {
                jobsApiResult.map((job, index) =>{
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
      
      <Pagination defaultPage={pageNumber} showFirstButton page={page} showLastButton size="large" count={10} variant="outlined" onChange={handlePagiChange}/>
      
    </Container>
  )
}