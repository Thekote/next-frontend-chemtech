import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function SearchClient() {
  const router = useRouter()

  const searchInputRef = useRef(null) 

  const [searchTerm, setSearchTerm] = useState("")
  
  const handleSearch = async () => {
    if (searchInputRef.current === null){
      return
    }

    const response = await fetch('http://localhost:3000/api/v1/client/name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: searchTerm}),
      });

    const client = await response.json()
    
    router.push(`/client/${client.id}`)
  };
    
  return (
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
      <div>
        <Stack spacing={2}>
          <TextField label="Client's Name" variant="standard" ref={searchInputRef} value={searchTerm} onChange={(evt) => setSearchTerm(evt.target.value)}/>
          <Button variant="contained" onClick={handleSearch}>Search</Button>
          </Stack>
    </div>
    </Box>
  )
};
