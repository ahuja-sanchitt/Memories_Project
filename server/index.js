import express from 'express';
import bodyParse from 'body-parser';
import mongoose from 'mongoose' ;
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

const app= express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());

app.use('/posts', postRoutes);

// const CONNECTION_URL= 'mongodb+srv://Sanchit:javascript@cluster0.vb7qnjq.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then ( () => app.listen( PORT, () => console.log(`Server Running on port: ${PORT} `)))
.catch( (error) => console.log(error.message))


