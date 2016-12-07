'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      list: [],
      input: ''
    };

    return _this;
  }

  _createClass(App, [{
    key: 'queryWord',
    value: function queryWord(query) {
      var _this2 = this;

      this.props.sendRequest(query, function (data) {
        _this2.setState({
          list: data
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Form, { queryWord: this.queryWord.bind(this), input: this.state.input }),
        React.createElement(List, { list: this.state.list })
      );
    }
  }]);

  return App;
}(React.Component);

;

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwibGlzdCIsImlucHV0IiwicXVlcnkiLCJzZW5kUmVxdWVzdCIsImRhdGEiLCJzZXRTdGF0ZSIsInF1ZXJ5V29yZCIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUNNQSxHOzs7QUFFSixlQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWxCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFLLEVBRE07QUFFWEMsYUFBTTtBQUZLLEtBQWI7O0FBRmtCO0FBT25COzs7OzhCQUVVQyxLLEVBQU87QUFBQTs7QUFDaEIsV0FBS0osS0FBTCxDQUFXSyxXQUFYLENBQXVCRCxLQUF2QixFQUE4QixVQUFDRSxJQUFELEVBQVU7QUFDdEMsZUFBS0MsUUFBTCxDQUFjO0FBQ1pMLGdCQUFNSTtBQURNLFNBQWQ7QUFHRCxPQUpEO0FBS0Q7Ozs2QkFHUztBQUNSLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsSUFBRCxJQUFNLFdBQWEsS0FBS0UsU0FBTCxDQUFlQyxJQUFmLENBQW9CLElBQXBCLENBQW5CLEVBQThDLE9BQVMsS0FBS1IsS0FBTCxDQUFXRSxLQUFsRSxHQURGO0FBRUUsNEJBQUMsSUFBRCxJQUFNLE1BQVEsS0FBS0YsS0FBTCxDQUFXQyxJQUF6QjtBQUZGLE9BREY7QUFNRDs7OztFQTNCZVEsTUFBTUMsUzs7QUE0QnZCOztBQUVEO0FBQ0E7QUFDQUMsT0FBT2IsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlciAocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsaXN0OltdLFxuICAgICAgaW5wdXQ6JydcbiAgICB9XG5cbiAgfVxuXG4gIHF1ZXJ5V29yZCAocXVlcnkpIHtcbiAgICB0aGlzLnByb3BzLnNlbmRSZXF1ZXN0KHF1ZXJ5LCAoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxpc3Q6IGRhdGFcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Rm9ybSBxdWVyeVdvcmQgPSB7dGhpcy5xdWVyeVdvcmQuYmluZCh0aGlzKX0gaW5wdXQgPSB7dGhpcy5zdGF0ZS5pbnB1dH0gLz5cbiAgICAgICAgPExpc3QgbGlzdCA9IHt0aGlzLnN0YXRlLmxpc3R9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn07XG5cbi8vIEluIHRoZSBFUzYgc3BlYywgZmlsZXMgYXJlIFwibW9kdWxlc1wiIGFuZCBkbyBub3Qgc2hhcmUgYSB0b3AtbGV2ZWwgc2NvcGVcbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==