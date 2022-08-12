import SearchBarJob from "./searchBarJob"
import SearchBarLocation from "./searchBarLocation"
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router'
import { useState } from "react";

export default function SearchBarContainer({}) {

    const router = useRouter()

    const [jobRole, setJobRole]= useState("");
    const [country, setCountry]= useState("us");


    const handleClick = e => {
    e.preventDefault()
    if (country.trim()===""){
        router.push(`/${jobRole}`)
    }else if(jobRole.trim()===""){
        router.push(`/${country}`)
    }else{
        router.push(`/${country}/${jobRole}/1`)
    }
    
  }
  

  

  return (
    <>
        <Grid container spacing={0.5} >
            
                <Grid item xs={4} sm={6} md={8}>
                    <SearchBarJob setJobRole={setJobRole} jobRole={jobRole} handleClick={handleClick} />
                </Grid>
                <Grid item >
                    <SearchBarLocation setCountry={setCountry} country={country} />
                </Grid>
                <Grid item xs={2} sx={{textAlign: "center"}}>
                    <IconButton sx={{ padding: '15px' , backgroundColor:"white"}} onClick={(e)=>handleClick(e)} >
                        <SearchIcon />
                    </IconButton>
                </Grid>
        </Grid>
    </>
  )
}