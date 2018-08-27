function greeter(person:String) {
    return "Hello, " + person;
}

let user = "Steven Lee";

document.body.innerHTML = greeter(user);


enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;

console.log(c);