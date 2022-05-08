import express from "express";
import bodyParser from 'body-parser';
import usersRoutes from './routes/user.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes)

app.get('/', (req, res) => {
    res.send('Hello There');
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
