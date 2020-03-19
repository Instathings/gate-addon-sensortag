# Gate addon for TI SensorTag CC2650

This addon extends [Instathings Gate](https://github.com/Instathings/gate) for  supporting TI SensorTag CC2650.

### Get started

This addon is meant to be used inside the gate Docker container and will be installed automatically once the device pairing procedure is launched from the [Editor](https://editor.instathings.io).

### Device pairing

Pairing a new SensorTag is quite easy: 

- start device pairing procedure from the [Editor](https://editor.instathings.io) 
- turn on the sensor when requested

### Enabled sensors

By default all sensors are enabled.

### Events

This addon extends the EventEmitter class, you can listen to the following events: 

- `data`: emitted every 5 seconds, contains all the information coming from the sensors.

#### Data payload structure

You can expect a payload structure like the following:

```
{
      accel: 0,
      lux: 0,
      hum: 0,
      temp: 0,
      pres: 0,
      gyro: { x: 0, y: 0, z: 0 },
      magn: { x: 0, y: 0, z: 0 },
}
```

### License
gate-addon-sensortag is [fair-code](http://faircode.io/) licensed under [Apache 2.0 with Commons Clause](./LICENSE.md)
