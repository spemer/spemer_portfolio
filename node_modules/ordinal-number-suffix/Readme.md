
# ordinal-number-suffix

  add suffixes to numbers (1st, 33rd, etc.)

## Installation

  Install with [component(1)](http://component.io):

    $ component install stephenmathieson/ordinal-number-suffix

## API

### `ordinal(number)`

Add the appropriate suffix to `number`.

## Example

```js
var ordinal = require('ordinal-number-suffix')
assert(ordinal(0) === '0th');
assert(ordinal(41) === '41st');
assert(ordinal(3) === '3rd');
```

## License

  MIT
