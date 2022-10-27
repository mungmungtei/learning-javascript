for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}
// *
// **
// ***
// ****
// *****

for (let i = 5; i > 0; i--) {
  console.log("*".repeat(i));
}
// *****
// ****
// ***
// **
// *

for (let i = 1; i <= 5; i++) {
  console.log(" ".repeat(5 - i) + "*".repeat(i));
}
//     *
//    **
//   ***
//  ****
// *****

for (let i = 1; i <= 5; i += 2) {
  console.log(" ".repeat((5 - i) / 2) + "*".repeat(i));
}
//   *
//  ***
// *****

for (let i = 4; i >= -4; i -= 2) {
  console.log("*".repeat(5 - Math.abs(i)));
}
// *
// ***
// *****
// ***
// *

for (let i = 4; i >= -4; i -= 2) {
  console.log(" ".repeat(Math.abs(i) / 2) + "*".repeat(5 - Math.abs(i)));
}
//   *
//  ***
// *****
//  ***
//   *

for (let i = 4; i >= -4; i -= 2) {
  console.log(" ".repeat(Math.abs(i)) + "*".repeat(5 - Math.abs(i)));
}
//      *
//    ***
//  *****
//    ***
//      *
