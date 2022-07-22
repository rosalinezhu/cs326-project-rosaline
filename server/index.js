import { database } from './database.js';
import express from 'express';
import logger from 'morgan';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use('/', express.static('client'));

app.post('/saveEvent', async (request, response) => {
    const {date, startTime, endTime, event } = request.body;
    await database.saveEvent(date, startTime, endTime, event );
    response.status(200).json({ status: 'success' });
  });

app.get('/displayEvents', async (request, response) => {
    const scores = await database.displayEvents();
    response.status(200).json(scores);
})

process.on('uncaughtException', function (err) {
  console.log(err);
}); 

app.listen(port, () => {

    console.log(` Server started on http://localhost:${port}`);
  
  });