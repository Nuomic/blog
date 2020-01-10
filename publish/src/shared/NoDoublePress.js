"use strict";

var NoDoublePress = {
  lastPressTime: 1,
  onPress: function onPress(callback) {
    var curTime = new Date().getTime();

    if (curTime - this.lastPressTime > 1000) {
      this.lastPressTime = curTime;
      callback();
    }
  }
};
module.exports = NoDoublePress;