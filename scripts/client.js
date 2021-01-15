console.log('Hello Cullen');

// Object
// - properties
// -- key
// -- value

const person = {
  // properties key: value
  name: 'Myron',
  hairColor: 'black/salt',
};

console.log(person);
console.log(person.name);
console.log(person.hairColor);
console.log(person.height);
console.log(person.kittyKat);

person.height = '6\' 2"';
console.log(person);

console.log(person.name + ' has ' + person.hairColor + ' hair.');

console.log(person['height']);

function printAnyProp(personObject, propKey) {
  console.log(personObject[propKey]);
}

printAnyProp(person, 'name');
printAnyProp(person, 'height');
printAnyProp(person, 'hairColor');

const people = [
  {
    name: 'Vada',
    favoriteFood: 'Poke'
  },
  {
    name: 'Anthony',
    favoriteFood: 'Curry'
  },
  {
    name: 'McKynlee',
    favoriteFood: 'Guacamole'
  },
];

function printFood(peopleFood) {
  for (let i = 0; i < peopleFood.length; i++) {
    const peepsItem = peopleFood[i];
    const sentence = `${peepsItem.name}'s favorite food is ${peepsItem.favoriteFood}`;
    console.log(sentence);
  }
}

printFood(people);
