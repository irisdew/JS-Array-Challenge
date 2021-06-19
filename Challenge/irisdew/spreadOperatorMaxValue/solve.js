// write your codes
function solution(inputArray) {
  const max = Math.max(...inputArray);
  const min = Math.min(...inputArray);
  const answer = `max : ${max}, min : ${min}`;
  console.log(answer);
  return answer;
}

exports.solution = solution;
