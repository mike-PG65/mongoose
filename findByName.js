require('./mongooseSetup');
const Person = require('./models/Person');

async function findPeopleByName() {
  try {
    const people = await Person.find({ name: 'John' });
    console.log('Found people:', people);
  } catch (err) {
    console.error(err);
  }
}

findPeopleByName();
