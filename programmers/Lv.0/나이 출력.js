// 머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다.
//v나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.

function solution(age) {
  let thisYear = 2022;
  return thisYear - age + 1;
}

console.log(solution(40)); // 1983
console.log(solution(23)); // 2000
