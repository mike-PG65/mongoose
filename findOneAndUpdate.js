require('./mongooseSetup');
const Person = require('./models/person');

const personName = 'John';

Person.findOneAndUpdate(
  { name: personName },
  { age: 20 },
  { new: true },
  (err, updatedPerson) => {
    if (err) return console.error(err);
    console.log('Updated:', updatedPerson);
  }
);
