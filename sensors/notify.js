function notifyCallback(err) {
  if (err) {
    debug(err);
  }
}

module.exports = function notify(tag) {
  tag.notifyAccelerometer(notifyCallback);
  tag.notifyLuxometer(notifyCallback);
  tag.notifyHumidity(notifyCallback);
  tag.notifyBarometricPressure(notifyCallback);
  tag.notifyGyroscope(notifyCallback);
  tag.notifyMagnetometer(notifyCallback);
}
