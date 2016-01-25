import express from 'express';
import assert from 'assert';
import Promise from 'bluebird';
const request = Promise.promisifyAll(require('request'));

const FORECAST_IO_KEY = process.env.FORECAST_IO_KEY;
assert(FORECAST_IO_KEY, 'A forecast.io key is required');
const FORECAST_IO_URL = 'https://api.forecast.io/forecast/' + FORECAST_IO_KEY + '/44.8167,20.4667';


const router = new express.Router();
export default router;

router.get('/raining', (req, res) => {
  request.getAsync({uri: FORECAST_IO_URL, json: true}).then(result => {
    const isRaining = result[0].body.currently.precipProbability > 0;
    res.send({isRaining});
  }).catch(() => res.status(500));
});
