// write code here
let flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
];

let result = [].concat.apply([], flattened);
console.log(result); 
