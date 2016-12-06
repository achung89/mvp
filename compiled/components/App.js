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
    key: 'test',
    value: function test(query) {
      console.log('hihihihihih');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwibGlzdCIsImlucHV0IiwicXVlcnkiLCJzZW5kUmVxdWVzdCIsImRhdGEiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeVdvcmQiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBRUosZUFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVsQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBSyxFQURNO0FBRVhDLGFBQU07QUFGSyxLQUFiOztBQUZrQjtBQU9uQjs7Ozs4QkFFVUMsSyxFQUFPO0FBQUE7O0FBQ2hCLFdBQUtKLEtBQUwsQ0FBV0ssV0FBWCxDQUF1QkQsS0FBdkIsRUFBOEIsVUFBQ0UsSUFBRCxFQUFVO0FBQ3RDLGVBQUtDLFFBQUwsQ0FBYztBQUNaTCxnQkFBTUk7QUFETSxTQUFkO0FBR0QsT0FKRDtBQUtEOzs7eUJBRUtGLEssRUFBTztBQUNYSSxjQUFRQyxHQUFSLENBQVksYUFBWjtBQUNEOzs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLElBQUQsSUFBTSxXQUFhLEtBQUtDLFNBQUwsQ0FBZUMsSUFBZixDQUFvQixJQUFwQixDQUFuQixFQUE4QyxPQUFTLEtBQUtWLEtBQUwsQ0FBV0UsS0FBbEUsR0FERjtBQUVFLDRCQUFDLElBQUQsSUFBTSxNQUFRLEtBQUtGLEtBQUwsQ0FBV0MsSUFBekI7QUFGRixPQURGO0FBTUQ7Ozs7RUE5QmVVLE1BQU1DLFM7O0FBK0J2Qjs7QUFFRDtBQUNBO0FBQ0FDLE9BQU9mLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpc3Q6W10sXG4gICAgICBpbnB1dDonJ1xuICAgIH1cblxuICB9XG5cbiAgcXVlcnlXb3JkIChxdWVyeSkge1xuICAgIHRoaXMucHJvcHMuc2VuZFJlcXVlc3QocXVlcnksIChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbGlzdDogZGF0YVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICB0ZXN0IChxdWVyeSkge1xuICAgIGNvbnNvbGUubG9nKCdoaWhpaGloaWhpaCcpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEZvcm0gcXVlcnlXb3JkID0ge3RoaXMucXVlcnlXb3JkLmJpbmQodGhpcyl9IGlucHV0ID0ge3RoaXMuc3RhdGUuaW5wdXR9IC8+XG4gICAgICAgIDxMaXN0IGxpc3QgPSB7dGhpcy5zdGF0ZS5saXN0fSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59O1xuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlXG4vLyBgdmFyYCBkZWNsYXJhdGlvbnMgd2lsbCBvbmx5IGV4aXN0IGdsb2JhbGx5IHdoZXJlIGV4cGxpY2l0bHkgZGVmaW5lZFxud2luZG93LkFwcCA9IEFwcDsiXX0=