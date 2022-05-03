const testCases = [
  { X: 10, Y: 85, D: 30 },
  { X: 40, Y: 85, D: 10 },
  { X: 70, Y: 85, D: 10 },
  { X: 70, Y: 200, D: 10 },
];

function solution(X, Y, D) {
  let jumpCount = 0;
  while (X < Y) {
    X += D;
    jumpCount++;
  }
  return jumpCount;
}

for (let { X, Y, D } of testCases) {
  console.log(solution(X, Y, D));
}
