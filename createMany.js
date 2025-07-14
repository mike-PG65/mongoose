require('./mongooseSetup');
const Person = require('./models/person');

const arrayOfPeople = [
  { name: 'Mary', age: 23, favoriteFoods: ['Salad'] },
  { name: 'John', age: 30, favoriteFoods: ['Burger'] },
  { name: 'Steve', age: 20, favoriteFoods: ['Burrito'] }
];

Person.create(arrayOfPeople, (err, people) => {
  if (err) return console.error(err);
  console.log('People created:', people);
});
