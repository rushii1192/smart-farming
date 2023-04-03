import React from 'react';
import mainImg from '../images/main-img.jpg';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';



export default function Home() {
  return (
    <Box
      sx={{
        width: '78%',
        margin: 5,
      }}>
      <Grid container spacing={2}>
        <Grid item xs={8} sx={{
          marginLeft: 25
        }}>
          <img src={mainImg} alt="" srcset="" width="100%" />
        </Grid>
      </Grid>
    </Box>

  )
}
