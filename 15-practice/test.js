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
