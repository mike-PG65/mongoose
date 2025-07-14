require('./mongooseSetup');
const Person = require('./models/Person');

async function deletePeopleNamedMary() {
  try {
    const result = await Person.deleteMany({ name: 'Mary' });
    console.log('Delete result:', result);
  } catch (err) {
    console.error('Error deleting:', err);
  }
}

deletePeopleNamedMary();
