require('./mongooseSetup');
const Person = require('./models/person');

const newPerson = new Person({
  name: 'Alice',
  age: 25,
  favoriteFoods: ['Pizza', 'Chocolate']
});

newPerson.save((err, data) => {
  if (err) return console.error(err);
  console.log('Saved person:', data);
});
