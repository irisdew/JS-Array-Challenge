// write your codes
function solution(inputArray) {
  const answer = inputArray.reduce(
    (prev, value, idx) => {
      if (prev.maxValue == null || prev.maxValue < value) {
        return { maxValue: value, idx };
      }
      return prev;
    },
    { maxValue: null, idx: -1 }
  );
  // console.log(answer);
  return answer;
}

exports.solution = solution;
