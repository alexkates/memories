import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

dotenv.config();
const {
    MONGO_DATABASE,
    MONGO_PASSWORD,
    MONGO_USERNAME,
} = process.env;

const CONNECTION_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.jwrzb.mongodb.net/${MONGO_DATABASE}?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
    .catch((error) => console.error(error.message));

mongoose.set('useFindAndModify', false);