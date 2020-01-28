const debug = require('debug')('gate-add-on-sensortag');
const EventEmitter = require('events');
const _ = require('lodash');
const SensorTag = require('sensortag');

class GateAddOnSensorTag extends EventEmitter {
  constructor() {
    super();
  }

  start() {
    debug(this.test);
    SensorTag.discover((sensorTag) => {
      debug('found ', sensorTag);
      sensorTag.connectAndSetup(() => {
        debug('connected');
        sensorTag.enableLuxometer(_.noop);
        sensorTag.setLuxometerPeriod(10, _.noop);
        sensorTag.on('luxometerChange', (data) => {
          console.log('READ DATA', data);
          this.emit('data', data);
        });
      });
    });
  }

  stop() { }
}

module.exports = GateAddOnSensorTag;
