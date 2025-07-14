require('./mongooseSetup');
const Person = require('./models/Person');

const personId = '68752c304832d7e927ccf20c';


async function findPersonById() {
  try {
    const person = await Person.findById(personId);
    if (!person) {
      console.log('Person not found');
      return;
    }
    console.log('Found by ID:', person);
  } catch (err) {
    console.error(err);
  }
}

findPersonById();