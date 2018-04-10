
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'foo', email: 'foo@example.com'},
        {name: 'bar', email: 'bar@example.com'},
        {name: 'baz', email: 'baz@example.com'}
      ]);
    });
};
