import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';

const Welcome = () => {

    const [ name,setName ] = useState("")

 useEffect(()=>{
    var username = (sessionStorage.getItem("Name"));
    setName(username);
 console.log("page2",name)
 },[name]);
  

  return (
    <div>
      
      <div className="App">
      <h1>Welcome {name}</h1>     
      <Typography variant="h2" gutterBottom>
        h2. Heading
      </Typography>
    </div>
    </div>
  )
}

export default Welcome;
