import express, { response } from 'express';
import { PORT, MONGO_URL } from './config.js';
import mongoose from 'mongoose';


const app = express();

app.get('/', async(request, response)=>{
    console.log(request);
    return response.status(234).send("HELLO...!");
});

app.get('/admin', async(request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to Admin Page..!");
});

app.get('/admin/faculty',async(request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to Faculty Page..!");
});

mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB", err);
    });

app.listen(PORT, () => {
    console.log(`App is running at PORT: ${PORT}`);
});