"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _nodeVampireQconfig = _interopRequireDefault(require("@ctrip/node-vampire-qconfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

var _default = router;
exports["default"] = _default;
router.use('/:name', function (req, res, next) {
  var name = req.params.name;

  var _qconfig = _nodeVampireQconfig["default"].getConfig("".concat(name, ".json"));

  var datas = _qconfig.get().then(function (data) {
    res.json(data); // console.log('QConfig Datas:', JSON.stringify(data))
  })["catch"](function (err) {
    console.log('QConfig Error:', err);
  });
});