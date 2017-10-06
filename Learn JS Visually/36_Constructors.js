// Example:
var Fruit = function Fruit(name, color) {
    this.name = name;
    this.color = color;
    this.info = function() {return "This is a "+this.color+" "+this.name};
}
var Cherry = new Fruit();
var Apple = new Fruit("apple", "green");
document.write(Apple.info());

// Exercise:
var User = function(name) {
    this.name = name;
}
var John = new User("John");
alert(John.name);
