const debug = require('debug')('gate-add-on-sensortag');
const _ = require('lodash');
const SensorTag = require('sensortag');

class GateAddOnSensorTag {
  constructor() {
    this.test = 5;
  }

  start() {
    debug(this.test);
    SensorTag.discover((sensorTag) => {
      debug('found ', sensorTag);
      sensorTag.connectAndSetup(() => {
        debug('connected');
        sensorTag.enableAccelerometer(_.noop);
        sensorTag.setAccelerometerPeriod(10, () => { });
      });
    });
  }

  stop() { }
}

module.exports = GateAddOnSensorTag;
