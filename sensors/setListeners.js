const debug = require('debug');

module.exports = function setListeners(tag) {
  tag.on('accelerometerChange', (data) => {
    this.data.accel = data;
  });

  tag.on('luxometerChange', (data) => {
    this.data.lux = data;
  });

  tag.on('humidityChange', (temperature, humidity) => {
    this.data.temp = temperature;
    this.data.hum = humidity;
  });

  tag.on('barometricPressureChange', (data) => {
    this.data.pres = data;
  });

  tag.on('gyroscopeChange', (x, y, z) => {
    this.data.gyro.x = x;
    this.data.gyro.y = y;
    this.data.gyro.z = z;
  });
  tag.on('magnetometerChange', (x, y, z) => {
    this.data.magn.x = x;
    this.data.magn.y = y;
    this.data.magn.z = z;
  });
}
