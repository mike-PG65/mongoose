require('./mongooseSetup');
const Person = require('./models/person');

const personId = 'PUT_ID_HERE';

Person.findById(personId, (err, person) => {
  if (err) return console.error(err);
  person.favoriteFoods.push('hamburger');
  person.save((err, updated) => {
    if (err) return console.error(err);
    console.log('Updated person:', updated);
  });
});
