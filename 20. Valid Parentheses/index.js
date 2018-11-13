const OPENS = ['{', '[', '('];

const CLOSES = ['}', ']', ')'];

const MAPS = ['()', '{}', '[]'];

const isValid = s => {

  // 空字符串, 直接通过校验
  if (!s) return true;

  let result = [];

  let len = s.length;

  // s = "((()(())))"

  // i = 0, 1, 2
  // result = ["(", "(", "("]

  // i = 3
  // char = ")"
  // result[result.length - 1] = "(" 
  // matchOpenAndClose("(", ")") => true
  // result.pop() =>  result = ["(", "("]

  // ... ...

  // 每次匹配成功, 则 result.pop() 后, length - 1

  // 全部都匹配成功, 则 result 最终 length = 0

  for (let i = 0; i < len; i++) {
    const char = s.charAt(i);
    if (OPENS.indexOf(char) > -1) {
      result.push(char);
    }
    if (CLOSES.indexOf(char) > -1) {
      if (matchOpenAndClose(result[result.length - 1], char)) {
        result.pop();
      } else {
        // 结束当前方法, 并返回 false
        return false;
      }
    }
  }

  return result.length === 0;

}

const matchOpenAndClose = (open, close) => {
  return MAPS.indexOf(`${open}${close}`) > -1;
}

const s = "(]";

const result = isValid(s);

// true
console.log(result);