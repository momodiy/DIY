interface LabelledValue {
    label: string;
}

const printLabel = (labelledObj: LabelledValue) => {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

/*
* 可选属性
* SquareConfig接口中的color和width属性为可选
* 非必须属性
* 预定义可能出现的参数的数据类型
* */

interface SquareConfig {
    color?: string;
    width?: number;
}


/*
* 只读属性
* 属性名前用 readonly来指定只读属性
* 赋值后， 只读属性再也不能被改变了
* */

interface Point {
    readonly x: number;
    readonly y: number;
}

/*
* 只读数组
* 使用ReadonlyArray定义
* 赋值后，数组值将不能被改变
* */

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!

/*
* 函数数组
* 一个只有参数列表和返回值类型的函数定义
* 参数列表里的每个参数都需要名字和类型
* */


interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

/*
* 可索引类型
*
* */

interface StringArray {
    [index: number]: string;
}

let myArray1: StringArray;
myArray1 = ["Bob", "Fred"];

let myStr1: string = myArray1[0];

interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// myArray[2] = "Mallory"; // error!

console.log(myArray);