// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
// 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요.
// 최빈값이 여러 개면 -1을 return 합니다.

function solution(array) {
  let sortedArray = array.sort((a, b) => a - b); // 배열 오름차순 정렬하기
  let mode = -1; // 최빈값
  let modeCnt = 0; // 최빈값이 몇번 등장했는지
  let nowNumCnt = 0; // 지금 숫자가 몇번 등장했는지
  let prevNum = -1; // 지금 숫자의 이전 숫자
  let isDupMode = false; // 최빈값이 여러개인지

  for (let i = 0; i < sortedArray.length; i++) {
    // 지금 비교하는 숫자가 이전 인덱스의 숫자와 같은지 확인
    if (prevNum !== sortedArray[i]) {
      nowNumCnt = 1;
    }
    nowNumCnt++;

    // 최빈값이 여러개인지 확인
    if (nowNumCnt === modeCnt && mode != sortedArray[i]) {
      isDupMode = true;
    }

    // 지금 숫자가 등장한 횟수가 현재까지의 최빈값 등장 횟수보다 많으면
    // 최빈값에 지금 숫자를 넣주고, 최빈값도 업데이트 시켜주기
    if (nowNumCnt > modeCnt) {
      mode = sortedArray[i];
      modeCnt = nowNumCnt;
      isDupMode = false;
    }

    // 지금 숫자를 이전 숫자로 할당 후 다시 반복문 실행
    prevNum = sortedArray[i];
  }
  // 최빈값이 여러개라면 -1, 아니라면 최빈값 리턴
  if (isDupMode) return -1;
  return mode;
}

const array1 = [1, 2, 3, 3, 3, 4];
const array2 = [1, 1, 2, 2];
const array3 = [1];
const array4 = [10, 11, 10, 12, 10, 15, 9, 10, 5, 100];
const array5 = [10, 11, 10, 11, 10, 11, 11, 10, 5, 100];

console.log(solution(array1)); // 3
console.log(solution(array2)); // -1
console.log(solution(array3)); // 1
console.log(solution(array4)); // 10
console.log(solution(array5)); //-1
