import React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from "axios";
import mainImg from '../images/crop-prediction.jpg';



export default function CropPredictor() {

    const [answer, setAnswer] = useState("");
    const [showAnswer, setShowAnswer] = useState('none');

    // variables for input
    const [nitrogen, setNitrogen] = useState("");
    const [pottassium, setPottassium] = useState("");
    const [phosphorus, setPhosphorus] = useState("");
    const [temperature, setTemperature] = useState("");
    const [humidity, setHumidity] = useState("");
    const [ph, setPh] = useState("");
    const [rainfall, setRainfall] = useState("");

    function onClickHandler() {
        var data = {
            "nitrogen": parseInt(nitrogen),
            "phosphorus": parseInt(phosphorus),
            "potassium": parseInt(pottassium),
            "temperature": parseInt(temperature),
            "humidity": parseInt(humidity),
            "ph": parseInt(ph),
            "rainfall": parseInt(rainfall)
        }

        axios.post('/predict-crop/', data, { headers: { "Content-Type": "application/json" } })
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
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h1>Crop Recommendator</h1>
                    <Divider sx={{ marginBottom: 3 }} />
                </Grid>
                <Grid item xs={5} sx={{
                    marginLeft: 5,
                    marginTop: 0
                }}>
                    <img src={mainImg} alt="" srcset="" width="100%" />
                </Grid>
                <Grid container xs={4} sx={{margin:2}}>
                    <Grid item xs={12} spacing={2}>
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
                    <Grid item xs={12}>
                        <TextField id="ph" label="ph" variant="outlined" sx={{
                            width: "100%",
                        }} onChange={(e) => setPh(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="Rainfall" label="Rainfall" variant="outlined" sx={{
                            width: "100%",
                        }} onChange={(e) => setRainfall(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            sx={{ width: '100%', backgroundColor: '#b5b823' }}
                            onClick={onClickHandler}
                        >Predict</Button>
                    </Grid>
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
