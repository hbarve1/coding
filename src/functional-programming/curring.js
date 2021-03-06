/** @format */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }

    // eslint-disable-next-line func-names
    return function (...args2) {
      curried.apply(this, args.concat(args2));
    };
  };
}
