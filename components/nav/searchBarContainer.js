import SearchBarJob from "./searchBarJob"
import SearchBarLocation from "./searchBarLocation"
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router'
import { useState } from "react";

export default function SearchBarContainer() {

    const router = useRouter()

    const [jobRole, setJobRole]= useState("");
    const [country, setCountry]= useState("");


    const handleClick = e => {
    e.preventDefault()
    if (country===""){
        router.push(`/${jobRole}`)
    }else if(jobRole===""){
        router.push(`/${country}`)
    }else{
        router.push(`/${country}/${jobRole}`)
    }
    
  }

  return (
    <>
        <Grid container spacing={0.5} sx={{margin:"0 auto"}}>
            
                <Grid item xs={5}>
                    <SearchBarJob setJobRole={setJobRole} jobRole={jobRole} />
                </Grid>
                <Grid item xs={5}>
                    <SearchBarLocation setCountry={setCountry} country={country} />
                </Grid>
                <Grid item xs={2} sx={{textAlign: "center"}}>
                    <IconButton sx={{ padding: '15px' , backgroundColor:"white"}} onClick={(e)=>handleClick(e)}>
                        <SearchIcon />
                    </IconButton>
                </Grid>
        </Grid>
    </>
  )
}