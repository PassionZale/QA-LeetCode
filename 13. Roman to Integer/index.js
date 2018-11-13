const romanToInt = s => {
  // 罗马数字集合
  const ROMANS = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }

  const len = s.length;

  // 存储最终返回结果
  let num = 0;

  // 根据罗马计数规则
  // IV:  I < V, 则 V - I = 4
  // LV:  L > V, 则 L + V = 55
  // II:  I = I, 则 I + I = 2
  for (let i = 0; i < len; i++) {
    const current_val = ROMANS[s[i]];
    const next_val = ROMANS[s[i + 1]];
    if (current_val < next_val) {
      num += next_val - current_val;
      // 跳过 next_val
      i++;
    } else {
      num += current_val;
    }
  }

  return num;
}

const s = "MCMXCIV";

const result = romanToInt(s);

// 1994
console.log(result);