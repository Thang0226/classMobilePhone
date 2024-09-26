let nokia = new Mobile("nokia", 1);
let iphone = new Mobile("iphone", 50);

nokia.turnOn();
nokia.charge();
nokia.typeDraft("This is test message from nokia");
nokia.sendMess(iphone);

iphone.turnOn();
iphone.checkInbox();

// // Practice creating similar object from existing object.
// let xiaomi = Object.create(nokia);
// xiaomi.batteryLevel = 200;

// // Practice defining new properties and methods for object
// nokia.manufacturer = "Nokia";
// iphone.manufacturer = "Iphone";

// nokia.changeBatt = function (level) {
//   this.batteryLevel = level;
// };

// nokia.changeBatt(80);
