import React from 'react';
import mainImg from '../images/main-img.jpg';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';




export default function Home() {
  return (
    <Box
      sx={{
        width: '78%',
        margin: 20,
      }}>
      <Grid container spacing={2}>
        <Grid item xs={10} sx={{
          marginLeft: 15,
          marginTop: -30
        }}>
          <img src={mainImg} alt="" srcset="" width="100%" />
        </Grid>
        <Grid item xs={12}>
          <h2>About Smart Farming</h2>
          <Divider />
          <p>
            Smart farming, also known as precision agriculture, is the practice of using technology and data analysis to optimize agricultural production. It involves the use of sensors, drones, GPS mapping, and other technologies to collect and analyze data on crop yields, weather patterns, soil conditions, and other factors that can affect crop growth.
          </p>
          <p>
            By leveraging this data, farmers can make more informed decisions about when to plant, fertilize, irrigate, and harvest crops, and can even tailor their approach to specific areas of their fields. This can help to increase efficiency, reduce waste, and ultimately improve crop yields and profitability.
          </p>
        </Grid>
      </Grid>
    </Box>

  )
}
