let nokia = new Mobile("nokia", 1);
let iphone = new Mobile("iphone", 50);

nokia.turnOn();
nokia.charge();
nokia.typeDraft("This is test message from nokia");
nokia.sendMess(iphone);

iphone.turnOn();
iphone.checkInbox();
