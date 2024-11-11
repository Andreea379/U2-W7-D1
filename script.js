// EXERCIZE 1

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  isBiggerAge(userToCompare) {
    return this.age > userToCompare.age
      ? `${this.firstName} ${this.lastName} è più vecchia di ${userToCompare.firstName} ${userToCompare.lastName}`
      : `${this.firstName} ${this.lastName} è più giovane di ${userToCompare.firstName} ${userToCompare.lastName}`;
  }
}

const myUser = new User("Andreea", "Samoila", 20, "Cremona");
const User1 = new User("Giulia", "Verdi", 17, "Monza");
const User3 = new User("Daniele", "Boselli", 39, "Firenze");

console.log(myUser.isBiggerAge(User1));
console.log(myUser.isBiggerAge(User3));

//  EXERCIZE 2

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  isSameOwner(petToCompare) {
    return this.ownerName === petToCompare.ownerName
      ? `Il padrone di ${this.petName} è lo stesso di ${userToCompare.petName}`
      : "Hanno gli stessi padroni";
  }
}

const pets = [];

const form = document.querySelector("form");
form.onsubmit = function (event) {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPets = new Pet(petName, ownerName, species, breed);
  pets.push(newPets);
};
