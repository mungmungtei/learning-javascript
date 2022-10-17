// 콜백함수
// - 나중에 내가 필요할 때 호출해줘!
// - 외부로부터 주어지는 함수
// - 전달할 당시에 바로 호출 X , 함수의 레퍼런스만 전달
// - 고차함수가 콜백함수가 필요한 순간에 호출함

// 고차함수
function calculate(a, b, action) {
  let result = action(a, b);
  console.log(result);
  return result;
}

// 콜백함수
const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const division = (a, b) => a / b;
const remainder = (a, b) => a % b;

calculate(75, 25, add); // 100
calculate(75, 25, minus); // 50
calculate(75, 25, multiply); // 1875
calculate(75, 25, division); // 3
calculate(75, 25, remainder); // 0
