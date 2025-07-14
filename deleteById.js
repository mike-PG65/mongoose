require('./mongooseSetup');
const Person = require('./models/Person');

const personId = '68752bcd5ae4099b092d55c4'; // replace with valid ObjectId string

async function removePersonById() {
  try {
    const removedPerson = await Person.findByIdAndDelete(personId);
    if (!removedPerson) {
      console.log('No person found with that ID.');
      return;
    }
    console.log('Removed:', removedPerson);
  } catch (err) {
    console.error(err);
  }
}

removePersonById();
