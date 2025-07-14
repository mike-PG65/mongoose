require('./mongooseSetup');
const Person = require('./models/Person');

async function createManyPeople() {
  const people = [
    { name: 'Alice', age: 25, favoriteFoods: ['Pizza'] },
    { name: 'Bob', age: 30, favoriteFoods: ['Pasta'] },
    { name: 'Charlie', age: 35, favoriteFoods: ['Steak'] }
  ];

  try {
    const createdPeople = await Person.create(people);
    console.log('Created people:', createdPeople);
  } catch (err) {
    console.error('Error creating people:', err);
  }
}

createManyPeople();
