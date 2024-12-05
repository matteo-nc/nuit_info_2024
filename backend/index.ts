import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import hello from './routes/hello.router';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

hello.setup(app);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));