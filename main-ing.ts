import Heap from "./heap-ing";

function main() {
  const numbers = new Heap(27);

  numbers.insertLeft(14, 27);
  numbers.insertLeft(7, 14);
  numbers.insertRight(11, 7);

  numbers.insertRight(47, 27);
  numbers.insertLeft(32, 47);
  numbers.insertRight(59, 47);
  numbers.insertLeft(50, 59);
  numbers.insertRight(77, 59);

  console.log("Preorder");
  console.log(numbers.preorder());
}

main();