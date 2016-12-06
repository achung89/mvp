'use strict';

var Form = function Form(_ref) {
  var queryWord = _ref.queryWord,
      input = _ref.input;
  return React.createElement(
    'div',
    null,
    React.createElement('input', { onChange: function onChange(ev) {
        input = ev.target.value;
      }, type: 'text' }),
    React.createElement('button', { onClick: function onClick() {
        queryWord(input);
      } })
  );
};word;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvRm9ybS5qc3giXSwibmFtZXMiOlsiRm9ybSIsInF1ZXJ5V29yZCIsImlucHV0IiwiZXYiLCJ0YXJnZXQiLCJ2YWx1ZSIsIndvcmQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsT0FBTyxTQUFQQSxJQUFPO0FBQUEsTUFBRUMsU0FBRixRQUFFQSxTQUFGO0FBQUEsTUFBWUMsS0FBWixRQUFZQSxLQUFaO0FBQUEsU0FDVDtBQUFBO0FBQUE7QUFDRSxtQ0FBTyxVQUFVLGtCQUFDQyxFQUFELEVBQU07QUFBQ0QsZ0JBQVFDLEdBQUdDLE1BQUgsQ0FBVUMsS0FBbEI7QUFBd0IsT0FBaEQsRUFBa0QsTUFBTyxNQUF6RCxHQURGO0FBRUUsb0NBQVEsU0FBUyxtQkFBSTtBQUFDSixrQkFBVUMsS0FBVjtBQUFpQixPQUF2QztBQUZGLEdBRFM7QUFBQSxDQUFYLENBS0VJIiwiZmlsZSI6IkZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRm9ybSA9ICh7cXVlcnlXb3JkLGlucHV0fSkgPT4gKFxuICA8ZGl2PlxuICAgIDxpbnB1dCBvbkNoYW5nZT17KGV2KT0+e2lucHV0ID0gZXYudGFyZ2V0LnZhbHVlfX0gdHlwZSA9ICd0ZXh0Jz48L2lucHV0PlxuICAgIDxidXR0b24gb25DbGljaz17KCk9PntxdWVyeVdvcmQoaW5wdXQpfX0+PC9idXR0b24+XG4gIDwvZGl2PlxuKTt3b3JkIl19