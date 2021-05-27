'use strict';

// 1. Реализовать возведение в целую степень. (pow(base, exponent) => base**exponent, где base любое число, exponent - натуральное (1, 2, 3) или * целое число(-2, -1, 0, 1, 2)).

function pow(base, exponent) {
    if (typeof base !== 'number') {
        throw new TypeError('"base" must be number value! ¯\(o_o)/¯');
      }
    if (typeof exponent !== 'number') {
      throw new TypeError('"exponent" must be number value! ¯\(o_o)/¯');
      }
    if (!Number.isSafeInteger(exponent)) {
        throw new RangeError('"exponent" must be integer value! ( ͡° ͜ʖ ͡°)');
      }
      if (!Number.isFinite(base ** exponent)) {
        throw new RangeError('Слишкам многааааа!!! (╯ ° □ °) ╯ (┻━┻) ');
      }
    return base ** exponent;
  }

try {
  const a = pow(2.5, -10);
  console.log('a :>> ', a);
} catch (error) {
  if (error instanceof TypeError) {
    alert('Argument must be number value! ( ͡° ͜ʖ ͡°)');
  }
  if (error instanceof RangeError) {
    alert('Слишкам многааааа!!! (╯ ° □ °) ╯ (┻━┻)');
  }
}




// 2. Реализовать вывод в консоль скобок (// bracketWrapper3(3); // => сразу в консоль)

const bracketWrapper3 = n => (n === 1 ? '()' : `(${bracketWrapper3(n - 1)})`)

console.log('bracketWrapper3(3) :>> ', bracketWrapper3(3));
