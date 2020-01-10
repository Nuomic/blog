"use strict";

openWin = function openWin(url, text, winInfo) {
  var winObj = window.open(url, text, winInfo);
  var loop = setInterval(function () {
    if (winObj.closed) {
      clearInterval(loop); //alert('closed');

      parent.location.reload();
    }
  }, 100);
};