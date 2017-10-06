// example:
var apple = {};  // creating an object
apple = {
    // adding properties
    name:"McIntosh",
    color: "Green",
    weight: 100,
    // adding method
    display: function() {alert("I weigh " + this.weight + "g");}
};

// property change with "." Dot notation
apple.color = "Red";
// adding new smell property
apple.smell = "Fresh";

// CALL the method of the apple object
apple.display();
// get value of the property
var getWeight = apple.weight;
document.write(getWeight);

// Exercise:
var registration = {};
registraion = {
    ownersName: "M.Petkanova",
    chasisNumber: 12345-6789,
    registrationDate: "08 May 2001",
    color: "Blue",
    yearManifacture: 2013,
    display: function() {console.log("Owners Name: " + this.ownersName
+ "\nChasis Number: " + this.chasisNumber
+ "\nRegistration Date: " + this.registrationDate
+ "\nColor: " + this.color
+ "\nYear of Manifacture: " + this.yearManifacture);}
}
registraion.display();
delete registraion.yearManifacture;
registraion.display();
