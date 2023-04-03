import React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import axios from "axios";
import mainImg from '../images/fertilizer-prediction.jpg';


export default function FertilizerPredictor() {

  const [answer, setAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState('none');

  // variables for input
  const [nitrogen, setNitrogen] = useState("");
  const [pottassium, setPottassium] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [moisture, setMoisture] = useState("");
  const [soilType, setSoilType] = useState("");
  const [cropType, setCropType] = useState("");

  function onClickHandler() {
    var data = {
      "nitrogen": parseInt(nitrogen),
      "phosphorus": parseInt(phosphorus),
      "potassium": parseInt(pottassium),
      "temperature": parseInt(temperature),
      "humidity": parseInt(humidity),
      "soil_type": parseInt(soilType),
      "moisture": parseInt(moisture),
      "crop_type": parseInt(cropType)
    }

    axios.post('/predict-fertilizer/', data, { headers: { "Content-Type": "application/json" } })
      .then((res) => {
        console.log(res.data);

        setShowAnswer("block");
        setAnswer(res.data.message);
      })
      .catch((err) => console.log(err));

  }

  return (
    <Box
      sx={{
        width: '78%',
        margin: 5,
      }}>
      <h1>Fertilizer Recommendator</h1>
      <Divider sx={{ marginBottom: 3 }} />
      <Grid container spacing={2}>
        <Grid item xs={5} sx={{
          marginLeft: 5,
          marginTop: 0
        }}>
          <img src={mainImg} alt="" srcset="" width="100%" />
        </Grid>
        <Grid container xs={4} sx={{ margin: 2 }} spacing={2}>
          <Grid item xs={12}>
            <TextField id="nitrogen" label="Nitrogen" variant="outlined" sx={{
              width: "100%",
            }} onChange={(e) => setNitrogen(e.target.value)} />

          </Grid>
          <Grid item xs={12}>
            <TextField id="Pottasium" label="Pottasium" variant="outlined" sx={{
              width: "100%",
            }} onChange={(e) => setPottassium(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField id="Phosphorous" label="Phosphorous" variant="outlined" sx={{
              width: "100%",
            }} onChange={(e) => setPhosphorus(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField id="Temperature" label="Temperature" variant="outlined" sx={{
              width: "100%",
            }} onChange={(e) => setTemperature(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField id="Humidity" label="Humidity" variant="outlined" sx={{
              width: "100%",
            }} onChange={(e) => setHumidity(e.target.value)} />
          </Grid>

        </Grid>
        <Grid item xs={4}>
          <TextField id="moisture" label="Moisture" variant="outlined" sx={{
            width: "100%",
          }} onChange={(e) => setMoisture(e.target.value)} />
        </Grid>
        <Grid item xs={4}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={soilType}
            label="SoilType"
            sx={{
              width: "100%",
            }}
            onChange={(event) => setSoilType(event.target.value)}
          >
            <MenuItem value={0}>Black</MenuItem>
            <MenuItem value={1}>Clayey</MenuItem>
            <MenuItem value={2}>Loamy</MenuItem>
            <MenuItem value={3}>Red</MenuItem>
            <MenuItem value={4}>Sandy</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={4}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cropType}
            label="CropType"
            sx={{
              width: "100%",
            }}
            onChange={(event) => setCropType(event.target.value)}
          >
            <MenuItem value={0}>Barley</MenuItem>
            <MenuItem value={1}>Cotton</MenuItem>
            <MenuItem value={2}>Ground Nuts</MenuItem>
            <MenuItem value={3}>Rice</MenuItem>
            <MenuItem value={4}>Coffee</MenuItem>
            <MenuItem value={5}>MoothBeans</MenuItem>
            <MenuItem value={6}>Maize</MenuItem>
            <MenuItem value={7}>Paddy</MenuItem>
            <MenuItem value={8}>Wheat</MenuItem>
            <MenuItem value={9}>SugarCane</MenuItem>
            <MenuItem value={10}>Pulses</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{ width: '100%', backgroundColor: '#b5b823' }}
            onClick={onClickHandler}
          >Predict</Button>
        </Grid>
        <Grid item xs={12} sx={{
          display: showAnswer
        }}>
          <h2>A.I Prediction</h2>
          <Divider sx={{ marginBottom: 1 }} />
          <p>
            The A.I has suggested {answer}.
          </p>
        </Grid>

      </Grid>

    </Box>
  )
}
