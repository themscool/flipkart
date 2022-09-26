import express from "express";
import dotenv from 'dotenv';
import bodyParser from 'body-parser'; 
import cors from 'cors';
import Connection from './database/db.js'
import DefaultData from './defalult.js';
import Router from './routes/route.js'


const app = express();


dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended:true, urlencoded:true}));

app.use('/', Router);
const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
})

DefaultData();