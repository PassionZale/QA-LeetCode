const isPalindrome = x => {
  // x < 0 :
  // 例如: -123, 反转之后为 321-
  // x % 10 === 0 && x !== 0
  // x 能被 10 整除, 如: 110, 反转之后为 011
  // 由于 0 可以被任意自然数整数, 例如: 0 / 10 = 0
  // 但是 0 反转扔为 0, 是 palindrome, 因此 x % 10 必须建立在 x !== 0 的条件之中
  if(x < 0 || x % 10 === 0 && x !== 0) return false;

  // 反转 x
  const num = Number(String(x).split("").reverse().join(""));

  // num === x
  return num === x;
}

const x = 123;

const result = isPalindrome(x);

// false
console.log(result);