// JSのiterator
var itr = [1, 2, 3];
// console.log(itr); // [ 1, 2, 3 ]
var hoge = itr.entries(); // イテレーターオブジェクトを返す
// console.log(hoge); // Object [Array Iterator] {}
// console.log(hoge.next().value);
// console.log(hoge.next().value);
// console.log(hoge.next().value);
var fuga = itr.values(); // keyを格納したイテレーターオブジェクトを返す
// console.log(fuga); // Object [Array Iterator] {}
// console.log(fuga.next().value);
// console.log(fuga.next().value);
// console.log(fuga.next().value);
var fugafuga = fuga[Symbol.iterator]();
// console.log(fugafuga); // Object [Array Iterator] {}
console.log(itr === fugafuga); // false
console.log(hoge === fuga); // false
console.log(fuga === fugafuga); // true
