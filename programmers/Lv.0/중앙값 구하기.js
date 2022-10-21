// 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다.
// 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때,
// 중앙값을 return 하도록 solution 함수를 완성해보세요.

// 숫자 배열에 sort() 수행 시, 숫자를 문자열로 변환하여 정렬을 함
// 문자열 11은 2보다 작기 때문에 숫자 오름차순으로 정렬되지 않는다!!
// 예를 들어 배열 [1, 2, 7, 10, 11, 20] -> [ 1, 10, 11, 2, 20, 7 ] 로 정렬됨

// 그래서 아래 코드로 했을 때 정확점 44점 나옴..
// function solution(array) {
//     array.sort();
//     let centerIndex = Math.floor(array.length / 2);
//     return array[centerIndex];
// }

// 그래서 비교함수를 써줘야 함!
function solution(array) {
  array.sort(function (a, b) {
    return a - b;
  });
  let centerIndex = Math.floor(array.length / 2);
  return array[centerIndex];
}

const array1 = [1, 2, 7, 10, 11];
const array2 = [9, -1, 0];

console.log(solution(array1)); //7
console.log(solution(array2)); // 0
