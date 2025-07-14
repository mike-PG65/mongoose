require('./mongooseSetup');
const Person = require('./models/person');

const food = 'Burrito';

Person.findOne({ favoriteFoods: food }, (err, person) => {
  if (err) return console.error(err);
  console.log('Found one:', person);
});
