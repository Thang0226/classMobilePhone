class Mobile {
  constructor(name, battery) {
    this.name = name;
    this.state = false;
    this.batteryLevel = battery;
    this.draft = "";
    this.inbox = [];
    this.outbox = [];
  }

  turnOn() {
    if (this.state == false) {
      this.state = true;
    }
  }

  turnOff() {
    if (this.state == true) {
      this.state = false;
    }
  }

  charge() {
    this.batteryLevel = 100;
  }

  changeBattery() {
    this.batteryLevel--;
    if (this.batteryLevel == 0) {
      this.state = false;
      alert(
        `Battery out of charge! ${this.name} is turned OFF. Please charge the phone!`
      );
    }
  }

  isOff() {
    if (this.state == false) {
      alert(
        "Phone is turned OFF. Cannot perform task. Please turn ON the phone!"
      );
      return true;
    }
    return false;
  }

  typeDraft(mess) {
    if (this.isOff()) return;

    this.draft = mess;

    this.changeBattery();
  }

  sendMess(mobile) {
    if (this.isOff()) return;

    mobile.inbox.push(this.draft);
    this.outbox.push(this.draft);
    this.draft = "";

    this.changeBattery();
  }

  checkInbox() {
    if (this.isOff()) return;

    let s = `Messages in ${this.name} inbox: \n`;
    for (let mess of this.inbox) {
      s += `${mess} \n`;
    }
    alert(s);

    this.changeBattery();
  }

  checkOutbox() {
    if (this.isOff()) return;

    let s = `Messages in ${this.name} outbox: \n`;
    for (let mess of this.out) {
      s += `${mess} \n`;
    }
    alert(s);

    this.changeBattery();
  }
}
