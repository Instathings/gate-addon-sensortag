const debug = require('debug')('gate-add-on-sensortag');
const SensorTag = require('sensortag');					// sensortag library

class GateAddOnSensorTag {
  constructor() { }

  start() {
    SensorTag.discover((sensorTag) => {
      debug('found ', sensorTag);
      sensorTag.connectAndSetup(() => {
        sensorTag.enableAccelerometer(_.noop);
        sensorTag.setAccelerometerPeriod(10, () => { });
      });
    });
  }

  stop() { }
}

module.exports = GateAddOnSensorTag;
