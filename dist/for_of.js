'use strict';

var brausers = ['Chrome', 'Firefox', 'Opera', 'Safary', 'Edge'];

// получаем ключ
for (var brauser in brausers) {
   console.log(brauser);
}

// получаем значения
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
   for (var _iterator = brausers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var br = _step.value;

      console.log(br);
   }
} catch (err) {
   _didIteratorError = true;
   _iteratorError = err;
} finally {
   try {
      if (!_iteratorNormalCompletion && _iterator.return) {
         _iterator.return();
      }
   } finally {
      if (_didIteratorError) {
         throw _iteratorError;
      }
   }
}