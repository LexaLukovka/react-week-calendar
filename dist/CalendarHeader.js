'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  firstDay: _propTypes2.default.object.isRequired,
  numberOfDays: _propTypes2.default.number.isRequired,
  headerCellComponent: _propTypes2.default.func.isRequired,
  dayFormat: _propTypes2.default.string.isRequired,
  columnDimensions: _propTypes2.default.array.isRequired
};

var CalendarHeader = function CalendarHeader(_ref) {
  var firstDay = _ref.firstDay,
      numberOfDays = _ref.numberOfDays,
      dayFormat = _ref.dayFormat,
      columnDimensions = _ref.columnDimensions,
      headerCellComponent = _ref.headerCellComponent;

  var HeaderCell = headerCellComponent;

  if (columnDimensions.length === 0) {
    return null;
  }

  var weekdayColumns = [];
  var totalWidth = 0;

  for (var i = 0; i < numberOfDays; i += 1) {
    var date = (0, _moment2.default)(firstDay).add(i, 'd').hour(0).minute(0).second(0);

    var width = columnDimensions[i].width;

    totalWidth += width;

    var newCell = _react2.default.createElement(
      'div',
      { key: i, className: 'weekCalendar__headerColumn', style: { width: width } },
      _react2.default.createElement(HeaderCell, { date: date, dayFormat: dayFormat })
    );
    weekdayColumns.push(newCell);
  }

  return _react2.default.createElement(
    'div',
    { style: { width: totalWidth }, className: 'weekCalendar__headerWrapper' },
    weekdayColumns
  );
};

CalendarHeader.propTypes = propTypes;

exports.default = CalendarHeader;