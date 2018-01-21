/*!
 * is-natural-number-string | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-natural-number-string
*/
'use strict';

module.exports = function isNaturalNumberString(str, option) {
  if (typeof str !== 'string') {
    return false;
  }

  if (option) {
    if ('includeZero' in option) {
      if (typeof option.includeZero !== 'boolean') {
        throw new TypeError(
          String(option.includeZero) +
          ' is neither true nor false. `includeZero` option must be a Boolean value.'
        );
      }

      if (option.includeZero) {
        return /^(-?0|[1-9]\d*)(\.0+)?$/.test(str);
      }
    }
  }

  return /^[1-9]\d*(\.0+)?$/.test(str);
};
