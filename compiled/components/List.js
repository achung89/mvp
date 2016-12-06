"use strict";

var List = function List(_ref) {
  var list = _ref.list;
  return React.createElement(
    "div",
    null,
    console.log(list),
    list.map(function (element) {
      return React.createElement(
        "div",
        null,
        " ",
        element.toLowerCase(),
        " "
      );
    })
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvTGlzdC5qc3giXSwibmFtZXMiOlsiTGlzdCIsImxpc3QiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiZWxlbWVudCIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUVDLElBQUYsUUFBRUEsSUFBRjtBQUFBLFNBQ1Q7QUFBQTtBQUFBO0FBQ0NDLFlBQVFDLEdBQVIsQ0FBWUYsSUFBWixDQUREO0FBRUNBLFNBQUtHLEdBQUwsQ0FBUyxVQUFDQyxPQUFEO0FBQUEsYUFDUjtBQUFBO0FBQUE7QUFBQTtBQUFPQSxnQkFBUUMsV0FBUixFQUFQO0FBQUE7QUFBQSxPQURRO0FBQUEsS0FBVDtBQUZELEdBRFM7QUFBQSxDQUFYIiwiZmlsZSI6Ikxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTGlzdCA9ICh7bGlzdH0pID0+IChcbiAgPGRpdj5cbiAge2NvbnNvbGUubG9nKGxpc3QpfVxuICB7bGlzdC5tYXAoKGVsZW1lbnQpPT5cbiAgICA8ZGl2PiB7ZWxlbWVudC50b0xvd2VyQ2FzZSgpfSA8L2Rpdj5cbiAgKX1cblxuICA8L2Rpdj5cbik7Il19