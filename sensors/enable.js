function enableCallback(err) {
  if (err) {
    debug(err);
  }
}

module.exports = function enable(tag) {
  tag.enableAccelerometer(enableCallback);
  tag.enableLuxometer(enableCallback);
  tag.enableHumidity(enableCallback);
  tag.enableBarometricPressure(enableCallback);
  tag.enableGyroscope(enableCallback);
  tag.enableMagnetometer(enableCallback);
}
