# avoiding_common_attacks

### Proper Use of Require, Assert and Revert

`require(carId >= 0 && carId <= 15, "Car Id provided is out of range");`

The use of `require` in `reserve()` guarantees validity of conditions that cannot be detected before execution.

### Using Specific Compiler Pragma - SWC-103 (Floating pragma)

`pragma solidity ^0.8.0;`

Locking the pragma helps ensure that contracts do not accidentally get deployed using, for example, the latest compiler which may have higher risks of undiscovered bugs.

## License

[MIT](https://choosealicense.com/licenses/mit/)
