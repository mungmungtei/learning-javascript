// 문자열 my_string이 매개변수로 주어집니다.
// my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  return my_string.split("").reverse().join("");
}

console.log(solution("jaron")); // noraj
console.log(solution("bread")); // daerb

// 참고
let a = "jaron";
console.log(a.slice(-1)); // n
console.log(a.split("")); // [ 'j', 'a', 'r', 'o', 'n' ]
console.log(a.split("").reverse()); // [ 'n', 'o', 'r', 'a', 'j' ]
console.log(a.split("").reverse().join()); // n,o,r,a,j
console.log(a.split("").reverse().join("")); // noraj
