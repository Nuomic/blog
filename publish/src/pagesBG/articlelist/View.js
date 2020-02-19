"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _BasicLayout = _interopRequireDefault(require("../components/BasicLayout"));

var _antd = require("antd");

var _component = require("react-imvc/component");

var _StickyTabs = _interopRequireDefault(require("../components/StickyTabs"));

var _moment = _interopRequireDefault(require("moment"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var confirm = _antd.Modal.confirm;
var TabPane = _antd.Tabs.TabPane;

var _default = function _default(_ref) {
  var state = _ref.state,
      handlers = _ref.handlers;
  var bdList = [{
    name: '首页',
    href: '/admin'
  }, {
    name: '文章管理',
    href: '/articlemng'
  }];
  var articleList = state.articleList;
  console.log('articleList', articleList);
  var handleDelete = handlers.handleDelete,
      handleChangeArticleStatus = handlers.handleChangeArticleStatus;
  var articleStatus = [{
    tabName: '全部',
    key: '0'
  }, {
    tabName: '公开',
    key: '1'
  }, {
    tabName: '私密',
    key: '2'
  }, {
    tabName: '草稿箱',
    key: '3'
  }, {
    tabName: '回收站',
    key: '4'
  }];

  var IconText = function IconText(_ref2) {
    var type = _ref2.type,
        text = _ref2.text;
    return _react["default"].createElement("span", {
      style: {
        padding: '0 20px 0 0'
      }
    }, _react["default"].createElement(_antd.Icon, {
      type: type,
      style: {
        marginRight: 8
      }
    }), _react["default"].createElement("span", null, text));
  }; // 文章分类处理


  var ArticleList = function ArticleList(status) {
    return articleList && articleList.filter(function (item) {
      return status == 0 ? true : item.status == status;
    });
  }; //删除提示框


  function showConfirm(id, status) {
    confirm({
      title: '确定要删除改文章吗？',
      content: status == 3 || status == 4 ? '是否彻底删除，删除后将无法找回' : '删除后可在回收站恢复',
      onOk: function onOk() {
        return regeneratorRuntime.async(function onOk$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return regeneratorRuntime.awrap(handleDelete(id, status));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        });
      },
      onCancel: function onCancel() {}
    });
  }

  var actions = function actions(item) {
    var View = _react["default"].createElement(_component.Link, {
      to: "/articledetail/".concat(item.id),
      target: "blank"
    }, "\u67E5\u770B");

    var Recycle = _react["default"].createElement(_antd.Button, {
      type: "link",
      style: {
        padding: 0
      },
      onClick: handleChangeArticleStatus.bind(_this, item.id, 3)
    }, "\u56DE\u6536\u81F3\u8349\u7A3F\u7BB1");

    var Edit = _react["default"].createElement(_component.Link, {
      to: "/admin/md/edit/".concat(item.id),
      target: "blank"
    }, "\u7F16\u8F91");

    var Delete = _react["default"].createElement(_antd.Button, {
      type: "link",
      style: {
        color: 'red',
        padding: 0
      },
      onClick: showConfirm.bind(_this, item.id, item.status)
    }, "\u5220\u9664");

    var action = [item.status == '4' && Recycle || Edit, Delete];
    item.status != 3 && action.unshift(View);
    return action;
  };

  return _react["default"].createElement(_BasicLayout["default"], {
    breadcrumbList: bdList
  }, _react["default"].createElement(_StickyTabs["default"], {
    tabBarExtraContent: _react["default"].createElement(_component.Link, {
      to: "/md/add"
    }, _react["default"].createElement(_antd.Button, {
      type: "primary",
      ghost: true,
      icon: "plus"
    }, "\u65B0\u589E"))
  }, articleStatus && articleStatus.map(function (item) {
    return _react["default"].createElement(TabPane, {
      tab: item.tabName + " (".concat(ArticleList(item.key) && ArticleList(item.key).length, ")"),
      key: item.key
    }, _react["default"].createElement(_antd.List, {
      pagination: {
        onChange: function onChange(page) {
          console.log(page);
        },
        pageSize: 10
      },
      itemLayout: "horizontal",
      dataSource: ArticleList(item.key),
      renderItem: function renderItem(item) {
        return _react["default"].createElement(_antd.List.Item, {
          key: item.id,
          actions: actions(item)
        }, _react["default"].createElement(_antd.List.Item.Meta, {
          title: _react["default"].createElement("span", {
            style: {
              fontWeight: 600
            }
          }, item.status == 3 ? _react["default"].createElement(_antd.Tag, {
            color: "green",
            className: "article-status-tag"
          }, "\u8349\u7A3F") : item.status == 4 ? _react["default"].createElement(_antd.Tag, {
            color: "purple",
            className: "article-status-tag"
          }, "\u56DE\u6536") : '', item.title),
          description: _react["default"].createElement("div", null, _react["default"].createElement(IconText, {
            type: "clock-circle",
            text: (0, _moment["default"])(item.createdAt).format('YYYY/MM/DD/hh:mm:ss')
          }), _react["default"].createElement(IconText, {
            type: "read",
            text: item.viewCount
          }), _react["default"].createElement(IconText, {
            type: "like-o",
            text: item.likeCount
          }), _react["default"].createElement(IconText, {
            type: "message",
            text: item.commentCount
          }))
        }));
      }
    }));
  })));
};

exports["default"] = _default;