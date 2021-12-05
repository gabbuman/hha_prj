import React from 'react'
import Box from '@mui/material/Box';

export default function Error({ msg }:any) {
    return (

      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
      >
        <h1>{msg}</h1>
      </Box>
    );
}