const debug = require('debug')('gate-add-on-sensortag');
const SensorTag = require('sensortag');					// sensortag library

class GateAddOnSensorTag {
  constructor() { }

  start() {
    SensorTag.discover((sensorTag) => {
      debug('found ', sensorTag);
      sensorTag.connectAndSetup(() => {
        tag.enableAccelerometer(_.noop);
        tag.setAccelerometerPeriod(10, () => { });
      });
    });
  }

  stop() { }
}

module.exports = GateAddOnSensorTag;
