'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var js = 'JavaScript',
    php = 'PHP',
    rest = ['Python', 'Ruby'];

console.log(js, php, rest); // JavaScript, PHP, ["Python", "Ruby"]

var first = 1,
    lastOne = 2,
    lastTwo = 3;

console.log(first, lastOne, lastTwo); // 1, 2, 3

var _ref = [1, 2],
    a = _ref[0],
    b = _ref[1],
    _ref$ = _ref[2],
    c = _ref$ === undefined ? 3 : _ref$;

console.log(a, b, c); // 1, 2, 3

function add(_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        a = _ref3[0],
        b = _ref3[1];

    return a + b;
};
console.log(add([5, 7])); // 12