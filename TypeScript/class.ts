class Greeter {
    //属性
    greeting: string;

    // 构造函数
    constructor(message: string) {
        this.greeting = message;
    }

    // 方法
    greet() {
        return "Hello, " + this.greeting;
    }
}

// 使用new关键字构造实例对象时会调用这个类的构造方法
let greeter = new Greeter("world");
console.log(greeter);

/*
* 属性修饰
* public 公有类，可自由访问的类
* private 私有类 仅在该类内部可访问
* protected 受保护的类 可在该类或该类的子类中访问
* readonly 只读属性 必须在声明时或构造函数里被初始化
* */

class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;

    constructor(theName: string) {
        console.log(666);
        // this.name = theName;
    }
}

let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit";
console.log(dad.name);

/*
* 存取器
* 一组常用于数值判断的函数
* set 存值时首先执行
* get 取值时时首先执行
* */
let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    //bug error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.

    // get fullName(): string {
    //     return this._fullName;
    // }

    // set fullName(newName: string) {
    //     if (passcode && passcode == "secret passcode") {
    //         this._fullName = newName;
    //     }
    //     else {
    //         console.log("Error: Unauthorized update of employee!");
    //     }
    // }
}

// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     alert(employee.fullName);
// }


/*
* 静态属性
* 也就是说，该属性存在于该类而不是该类生成的实例对象上
* 想要访问静态属性必须通过静态方法操作
* */

class Grid {
    static origin = {x: 0, y: 0};
    common = {x: 0, y: 0};

    calculateDistanceFromOrigin(point: { x: number; y: number; }) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }

    constructor(public scale: number) {
    }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
// console.log(grid1.origin);   Error
console.log(grid1.common);




//将文件声明为 module ，其中的变量回作为当前作用域下的局部变量
export {};