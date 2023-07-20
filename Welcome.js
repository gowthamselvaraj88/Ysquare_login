import React, { useEffect, useState } from 'react'

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
      <header className="App-header">
      <h1>Welcome {name} !</h1>     
       </header>      
    </div>
    </div>
  )
}

export default Welcome;
