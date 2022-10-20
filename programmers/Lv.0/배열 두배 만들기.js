// 정수 배열 numbers가 매개변수로 주어집니다.
// numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    answer.push(numbers[i] * 2);
  }
  return answer;
}

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [1, 2, 100, -99, 1, 2, 3];
console.log(solution(numbers1)); // [2, 4, 6, 8, 10]
console.log(solution(numbers2)); // [2, 4, 200, -198, 2, 4, 6]

// 다른 사람의 풀이를 보니 대부분 map 을 이용했다.
// 다음엔 map 으로 문제풀어보기

// 다른 사람 풀이
// function solution(numbers) {
//   return numbers.map(n => n * 2);
// }
