// 첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1,
// 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다.
// 두 분수를 더한 값을 기약 분수로 나타냈을 때
// 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(denum1, num1, denum2, num2) {
  let answer = [];
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;

  for (let i = Math.min(denum, num); i > 0; i--) {
    if (denum % i === 0 && num % i === 0) {
      answer.push(denum / i, num / i);
      break;
    }
  }
  return answer;
}

console.log(solution(1, 2, 3, 4)); // [5, 4]
console.log(solution(9, 2, 1, 3)); // [29, 6]
