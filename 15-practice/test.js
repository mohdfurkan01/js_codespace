const myArr = [];
//%DebugPrint(myArr);

//https://github.com/GoogleChromeLabs/jsvu

//Intallation of jsvu(JavaScript (engine) Version Updater)
//? Link: https://github.com/GoogleChromeLabs/jsvu

//topic
//continuous array, Holey array
//SMI (small integer)
//Packed element
//Double (float, string, function)

const arrTwo = [1, 2, 3, 4, 5];
//type: PACKED_SMI_ELEMENTS (best optimize array only for numbers not including any other type like decimal or other)
arrTwo.push(6.0);
//PACKED_DOUBLE_ELEMENTS

//arrTwo.push("any_string");
arrTwo.push("7");
//PACKED_ELEMENTS

arrTwo[10] = 11;
// HOLEY_ELEMENTS bcoz it has a index sapce called hole

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

//conditions checking for undefined
//bound check
//hasOwnProperty(arrTwo, 9)
//hasOwnProperty(arrTwo.prototpe, 10)
//hasOwnProperty(Object.arrTwo, 10);

//holes are very expensive in js

//highest optimized SMI > DOUBLE > PACKED
//H_SMI > H_DOUBLE > H_PACKED (H_SMI=> hole_smallInteger)
