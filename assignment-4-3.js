const testCases = [
  { A: [3, 8, 9, 7, 6], K: 3 },
  { A: [0, 0, 0], K: 1 },
  { A: [1, 2, 3, 4], K: 4 },
];

function solution(A, K) {
  while (K > 0) {
    A.unshift(A.pop());
    K--;
  }
  return A;
}

for (let { A, K } of testCases) {
  console.log("Before Rotation: " + A);
  console.log(" After Rotation: " + solution(A, K));
  console.log();
}
