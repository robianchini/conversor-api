const express = require('express');
const routes = express.Router();

const AreaController = require('./controllers/AreaController');
const CurrencyController = require('./controllers/CurrencyController');
const DataController = require('./controllers/DataController');
const FuelCurrency = require('./controllers/FuelCurrency');
const LengthController = require('./controllers/LengthController');
const SpeedController = require('./controllers/SpeedController');
const TemperatureController = require('./controllers/TemperatureController');
const VolumeController = require('./controllers/VolumeController');
const WeightController = require('./controllers/WeightController');

routes.get('/area', AreaController.index);
routes.get('/currency', CurrencyController.index);
routes.get('/data', DataController.index);
routes.get('/fuel', FuelCurrency.index);
routes.get('/length', LengthController.index);
routes.get('/speed', SpeedController.index);
routes.get('/temperature', TemperatureController.index);
routes.get('/volume', VolumeController.index);
routes.get('/weigth', WeightController.index);

module.exports = routes;

