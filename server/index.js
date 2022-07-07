import express from 'express';
import logger from 'morgan';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use('/', express.static('client'));

app.post('/saveEvent', (request, response) => {
    const {date, startTime, endTime, event } = request.body;
    await database.saveWordScore(date, startTime, endTime, event );
    response.status(200).json({ status: 'success' });
  });

app.listen(port, () => {

    const msg = ` Server started on http://localhost:${port}`;
  
  });