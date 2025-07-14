require('./mongooseSetup');
const Person = require('./models/person');

Person.find({ favoriteFoods: 'burrito' })
  .sort({ name: 1 })
  .limit(2)
  .select('-age')
  .exec((err, data) => {
    if (err) return console.error(err);
    console.log('Chained results:', data);
  });
