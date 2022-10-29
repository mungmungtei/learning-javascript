// 문자열 my_string과 문자 letter이 매개변수로 주어집니다.
// my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string, letter) {
  return my_string
    .split("")
    .filter((char) => char !== letter)
    .join("");
}

// 다른 사람 풀이
// letter로 split을 하면 해당 letter가 사라지는 것을 활용했다!
// "BCBdbe".split("B") -> [ '', 'C', 'dbe' ]
function solution(my_string, letter) {
  const answer = my_string.split(letter).join("");
  return answer;
}

console.log(solution("abcdef", "f")); // abcde
console.log(solution("BCBdbe", "B")); // Cdbe
