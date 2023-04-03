import React from 'react';
import mainImg from '../images/main-img.jpg';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';





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
        <Grid item xs={12}>
          <h2>Our Tools</h2>
          <Divider />
          <h3><GrassOutlinedIcon /> Crop Recommendator </h3>
          <p>
            Crop recommendation is the process of providing farmers with advice on which crops to grow based on various factors such as soil quality, climate, market demand, and profitability. Crop recommendation systems use data and models to provide farmers with tailored advice on which crops are most suitable for their specific farm conditions.

            Crop recommendation systems typically take into account various factors such as soil type, soil fertility, water availability, climate, and market demand. This information is then used to recommend the most suitable crops for planting. Additionally, crop recommendation systems can provide advice on the optimal planting time, fertilization, and irrigation strategies for specific crops.
          </p>
          <h3><BackpackOutlinedIcon /> Fertilizer Recommendator </h3>
          <p>
            A fertilizer recommendator is a tool or system that helps farmers to determine the optimal fertilizer application rates for their crops. It takes into account various factors such as soil type, soil fertility, crop type, and growth stage to provide tailored recommendations for fertilizer application.
            Fertilizer recommendators can help farmers to optimize crop yields, reduce fertilizer waste, and minimize environmental impact. By providing tailored recommendations based on local soil conditions, crop type, and growth stage, farmers can apply fertilizers more efficiently and effectively, leading to better crop production outcomes.
          </p>
        </Grid>
      </Grid>
    </Box>

  )
}
