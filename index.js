const debug = require('debug')('gate-addon-sensortag');
const EventEmitter = require('events');
const SensorTag = require('@instathings/sensortag');

const enableSensors = require('./sensors/enable');
const setPeriod = require('./sensors/setPeriod');
const setListeners = require('./sensors/setListeners');
const notify = require('./sensors/notify');

class GateAddOnSensorTag extends EventEmitter {
  constructor(allDevices) {
    super();
    this.data = {
      accel: 0,
      lux: 0,
      hum: 0,
      temp: 0,
      pres: 0,
      gyro: { x: 0, y: 0, z: 0 },
      magn: { x: 0, y: 0, z: 0 },
    };
    this.knownDevices = allDevices.bluetooth || [];
  }

  init() {
    debug('Discover start');
    SensorTag.discover((sensorTag) => {
      debug('Found one SensorTag');
      sensorTag.connectAndSetup((err) => {
        if (err) {
          throw err;
        }
        enableSensors(sensorTag);
        setPeriod(sensorTag);
        notify(sensorTag);
        setListeners.call(this, sensorTag);
        this.start();
      });
    });
  }

  start(device) {
    setInterval(() => {
      debug(this.data);
      this.emit('data', this.data);
    }, 5000);
  }

  stop() { }

  control() { }
}

module.exports = GateAddOnSensorTag;
