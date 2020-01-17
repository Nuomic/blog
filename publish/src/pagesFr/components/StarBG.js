"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _component = require("react-imvc/component");

var _config = require("./../config");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = function _default(_ref) {
  var children = _ref.children;
  (0, _react.useEffect)(function () {
    window.addEventListener('resize', draw);
    return draw();
  }, []);
  var canvasRef = (0, _react.useRef)(null);

  var draw = function draw() {
    var canvas = canvasRef.current;
    var ctx = canvas.getContext('2d'); // implement draw on ctx here

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = new Color(250).style;
    var mousePosition = {
      x: 30 * canvas.width / 100,
      y: 30 * canvas.height / 100
    };
    var dots = {
      nb: canvas.height / 3,
      distance: canvas.height / 10,
      d_radius: canvas.height / 6,
      array: []
    };

    function colorValue(min) {
      return Math.floor(Math.random() * 255 + min);
    }

    function createColorStyle(r, g, b) {
      return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)';
    }

    function mixComponents(comp1, weight1, comp2, weight2) {
      return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
    }

    function averageColorStyles(dot1, dot2) {
      var color1 = dot1.color,
          color2 = dot2.color;
      var r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
          g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
          b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
      return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
    }

    function Color(min) {
      min = min || 0;
      this.r = colorValue(min);
      this.g = colorValue(min);
      this.b = colorValue(min);
      this.style = createColorStyle(this.r, this.g, this.b);
    }

    function Dot() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = -0.5 + Math.random();
      this.vy = -0.5 + Math.random();
      this.radius = Math.random() * 2;
      this.color = new Color(); // console.log(this);
    }

    Dot.prototype = {
      draw: function draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color.style;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
      }
    };

    function createDots() {
      for (var i = 0; i < dots.nb; i++) {
        dots.array.push(new Dot());
      }
    }

    function moveDots() {
      dots.array.forEach(function (dot) {
        if (dot.y < 0 || dot.y > canvas.height) {
          dot.vx = dot.vx;
          dot.vy = -dot.vy;
        } else if (dot.x < 0 || dot.x > canvas.width) {
          dot.vx = -dot.vx;
          dot.vy = dot.vy;
        }

        dot.x += dot.vx;
        dot.y += dot.vy;
      });
    }

    function connectDots() {
      dots.array.forEach(function (i_dot) {
        dots.array.forEach(function (j_dot) {
          if (i_dot.x - j_dot.x < dots.distance && i_dot.y - j_dot.y < dots.distance && i_dot.x - j_dot.x > -dots.distance && i_dot.y - j_dot.y > -dots.distance) {
            if (i_dot.x - mousePosition.x < dots.d_radius && i_dot.y - mousePosition.y < dots.d_radius && i_dot.x - mousePosition.x > -dots.d_radius && i_dot.y - mousePosition.y > -dots.d_radius) {
              ctx.beginPath();
              ctx.strokeStyle = averageColorStyles(i_dot, j_dot);
              ctx.moveTo(i_dot.x, i_dot.y);
              ctx.lineTo(j_dot.x, j_dot.y);
              ctx.stroke();
              ctx.closePath();
            }
          }
        });
      });
    }

    function drawDots() {
      dots.array.forEach(function (item) {
        return item.draw();
      });
    }

    function animateDots() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      moveDots();
      connectDots();
      drawDots();
      requestAnimationFrame(animateDots);
    }

    onmousemove = function onmousemove(e) {
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;
    };

    onmouseleave = function onmouseleave() {
      mousePosition.x = canvas.width / 2;
      mousePosition.y = canvas.height / 2;
    };

    createDots();
    requestAnimationFrame(animateDots);
  };

  return _react["default"].createElement("div", null, _react["default"].createElement("canvas", {
    style: {
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      background: _config.themeColor.starBgColor,
      zIndex: '-1'
    },
    ref: canvasRef
  }), _react["default"].createElement(_component.Style, {
    name: "antd"
  }), _react["default"].createElement(_component.Style, {
    name: "antdPro"
  }), _react["default"].createElement(_component.Style, {
    name: "customize"
  }), _react["default"].createElement(_component.Style, {
    name: "commonFr"
  }), children);
};

exports["default"] = _default;