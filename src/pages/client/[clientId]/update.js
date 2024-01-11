import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function UpdateClient() {
  const { query } = useRouter()

  const router = useRouter()

  const updateInputRef = useRef(null) 

  const [updateTerm, setUpdateTerm] = useState("")
  
  const handleUpdate = async () => {
    if (updateInputRef.current === null){
      return
    }
    const response = await fetch(`http://localhost:3000/api/v1/client/${query.clientId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: updateTerm}),
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
          <TextField label="Client's Name" variant="standard" ref={updateInputRef} value={updateTerm} onChange={(evt) => setUpdateTerm(evt.target.value)}/>
          <Button variant="contained" onClick={handleUpdate}>Update</Button>
          </Stack>
    </div>
    </Box>
  )
};
