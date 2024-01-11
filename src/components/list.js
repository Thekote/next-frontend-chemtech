import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';



import { ListUnit } from "./ListUnit";

export const ListClients = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/clients")
    .then((res) => res.json())
    .then(
      (data) => {
        setIsLoaded(true);
        setClients(data);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
      );
    }, []);
    
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      <div>Loading...</div>;
    } else {
      return(
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>
            {clients.map((client) => <ListUnit key={client.id} client={client}/>)}
          </List>
        </nav> 
      </Box>     
      ) 

    }

   
};

  // if (error) {

  // } else if (!isLoaded) {

  // } else {
  //   clients.map((client) => {
  //    return(
  //     <ListUnit key={client.id} client={client.name}/>
  //    ); 
  //   });
  // }
