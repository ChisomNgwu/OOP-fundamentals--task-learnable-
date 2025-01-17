//gym system

class Gym {
    static totalMembers = 0; // Shared total members in the gym

      // Static method to display gym rules
  static displayRules() {
    console.log("Gym Rules: No food or drink allowed inside the gym. Wear appropriate workout attire.");
  }

  // Non-static method to increment the total member count
  incrementMemberCount() {
    Gym.totalMembers += 1;
    console.log(`Total members in the gym: ${Gym.totalMembers}`);
  }
}  


class Member {

    name ="";
    memberId = "";
    static monthlyfee = 30;
    static annualfee = 300;
    classes = [];

    constructor(name, memberId, monthlyfee, annualfee) {
      this.name = name; 
      this.memberId = memberId; 
      this.monthlyfee = monthlyfee;
      this.annualfee = annualfee;
      this.classes = []; // List of classes the member has subscribed to
    }

      // Static method to display gym's membership fees
  static displayMembershipFees() {
    console.log(`Membership Fees: Monthly membership is $${this.monthlyfee}. Annual membership is $${this.annualfee}.`);
  }

    // Non-static method to subscribe to a class
    subscribeToClass(className) {
        this.classes.push(className);
        console.log(`${this.name}, ID:${this.memberId} has subscribed to the ${className} class.`);
      }
                                    
}


// Display gym rules
Gym.displayRules();


// Display gym membership fees
Member.displayMembershipFees();

// Create gym members
const member1 = new Member("Ben", 203);
member1.subscribeToClass(`Yoga`);


// Increment total members in the gym
const newlyAddedMember1 = new Gym()
newlyAddedMember1.incrementMemberCount();


const member2 = new Member("Jessy", 240);
member2.subscribeToClass(`Zumba`);

const member3 = new Member("Tems", 140);
member3.subscribeToClass(`Pilates`);


const newlyAddedMember2 = new Gym()
newlyAddedMember2.incrementMemberCount();

const newlyAddedMember3 = new Gym()
newlyAddedMember3.incrementMemberCount();
