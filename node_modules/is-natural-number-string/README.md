# is-natural-number-string

[![NPM version](https://img.shields.io/npm/v/is-natural-number-string.svg)](https://www.npmjs.com/package/is-natural-number-string)
[![Bower version](https://img.shields.io/bower/v/is-natural-number-string.svg)](https://github.com/shinnn/is-natural-number-string/releases)
[![Build Status](https://travis-ci.org/shinnn/is-natural-number-string.svg?branch=master)](https://travis-ci.org/shinnn/is-natural-number-string)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/is-natural-number-string.svg)](https://coveralls.io/r/shinnn/is-natural-number-string)
[![devDependency Status](https://david-dm.org/shinnn/is-natural-number-string/dev-status.svg)](https://david-dm.org/shinnn/is-natural-number-string#info=devDependencies)

Check if a given value is a string that represents [natural number](https://en.wikipedia.org/wiki/Natural_number)

```javascript
isNaturalNumberString('9478123289889839898438984843498934894'); //=> true
isNaturalNumberString('-1'); //=> false
```

Unlike [`is-natural-number`](https://github.com/shinnn/is-natural-number.js), `is-natural-number-string` can handle a too large number that exceeds [the JavaScript maximum safe integer `9007199254740991`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER).

## Installation

### Package managers

#### [npm](https://www.npmjs.com/)

```
npm install is-natural-number-string
```

#### [bower](https://bower.io/)

```
bower install is-natural-number-string
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/is-natural-number-string/master/browser.js)

## API

### isNaturalNumberString(*val* [, *option*])

*val*: `String`  
*option*: `Object`  
Return: `Boolean`

```javascript
isNaturalNumberString('15'); //=> true
isNaturalNumberString('4.3'); //=> false

isNaturalNumberString('1'); //=> true
isNaturalNumberString('1.0'); //=> true
isNaturalNumberString('1.00000000000000000000000000'); //=> true

// non-string
isNaturalNumberString(15); //=> false
isNaturalNumberString(); //=> false
```

#### option.includeZero

Type: `Boolean`  
Default: `false`

Determine whether this library regards `0` as a natural number or not. 

```javascript
isNaturalNumberString('0'); //=> false
isNaturalNumberString('0', {includeZero: true}); //=> true
```

## License

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
