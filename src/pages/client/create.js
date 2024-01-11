import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



export default function CreateClient() {
  const router = useRouter()

  const searchInputRef = useRef(null) 

  const [name, setName] = useState("")
  const [sex, setSex] = useState("")
  const [age, setAge] = useState("")
  const [birthday, setBirthday] = useState("")
  const [city, setCity] = useState("")

  const handleCreate = async () => {
    const response = await fetch('http://localhost:3000/api/v1/client/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            name: name,
            sex: sex,
            age: age,
            birthday: birthday,
            city_id: city
          }),
    });
    
    const client = await response.json()
  
    router.push(`/client/${client.id}`)
  
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          label="Full Name"
          variant="standard"
          value={name} 
          onChange={(evt) => setName(evt.target.value)}
        />
        <TextField
          required
          label="Sex"
          variant="standard"
          value={sex} 
          onChange={(evt) => setSex(evt.target.value)}
        />
        <TextField
          required
          label="Age"
          variant="standard"
          value={age} 
          onChange={(evt) => setAge(evt.target.value)}
        />
        <TextField
          required
          label="Birthday"
          variant="standard"
          value={birthday} 
          onChange={(evt) => setBirthday(evt.target.value)}
        />
        <TextField
          required
          label="City Id"
          variant="standard"
          value={city} 
          onChange={(evt) => setCity(evt.target.value)}
        />
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={handleCreate}>Create</Button>
        </Stack>
      </div>
    </Box>
  )
}
