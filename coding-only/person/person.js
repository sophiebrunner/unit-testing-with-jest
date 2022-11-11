/* Person class in person.js with the following requirements in mind.
  The Person class should have the name and hobbies properties
  The name should be passed in the constructor
  The Person class should have an introduce() method that return the string My name is + the name of the person
  The hobbies member should be initialized as an empty array
  The Person class should have an addHobby(newHobby) method
  The method accepts the new hobby as string
  The method should add the passed hobby to the hobbies array
  
    Example usage of the Person class
    const nico = new Person("Nico");
    const result = nico.introduce();
    console.log(result); // "My name is Nico"
    console.log(nico.hobbies.length); // 0
    nico.addHobby("Tennis");
    console.log(nico.hobbies.length); // 1 */

export class Person {
  constructor(name) {
    this.name = name;
    this.hobbies = new Array();
  }
  introduce() {
    return "My name is " + this.name;
  }
  addHobby(newHobby) {
    return this.hobbies.push(newHobby);
  }
}
