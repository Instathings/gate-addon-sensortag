const debug = require('debug')('gate-addon-sensortag');

function setCallback(err) {
  if (err) {
    debug(err);
  }
}

module.exports = function setPeriod(tag) {
  tag.setAccelerometerPeriod(10, setCallback);
  tag.setLuxometerPeriod(10, setCallback);
  tag.setHumidityPeriod(1000, setCallback);
  tag.setBarometricPressurePeriod(1000, setCallback);
  tag.setGyroscopePeriod(1000, setCallback);
  tag.setMagnetometerPeriod(1000, setCallback);
};
