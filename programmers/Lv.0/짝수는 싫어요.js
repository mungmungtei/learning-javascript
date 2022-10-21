// 정수 n이 매개변수로 주어질 때,
// n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

// 내 풀이 방법 - 코드가 아주 너저분~하다.
function solution(n) {
  let answer = [];
  if (n % 2 === 0) {
    for (let i = n - 1; i > 0; i -= 2) {
      answer.push(i);
    }
  } else {
    for (let i = n; i > 0; i -= 2) {
      answer.push(i);
    }
  }
  return answer.sort(function (a, b) {
    return a - b;
  });
}

// 다른 사람 풀이
// 아예 1부터 시작해서 2씩 증가하는 방법으로 나중에 오름차순 작업도 필요 없게 되었다.
function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i += 2) answer.push(i);
  return answer;
}

console.log(solution(10)); // [ 1, 3, 5, 7, 9 ]
console.log(solution(15)); // [1, 3, 5, 7, 9, 11, 13, 15]
