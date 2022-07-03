import express from 'express';
import dotenv from 'dotenv'

dotenv.config();

const app = express();

app.get('/', (request, response) => response.json({ message: 'Hello World!' }));

app.get('/:name', (request, response) => {
    const { name } = request.params;
    response.json({ message: `Your name is ${name}` });
});

app.listen('3333', () => {
    console.log(process.env.PROJECT_NAME + ' is running!');
});
