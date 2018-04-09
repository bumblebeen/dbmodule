
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'foo', email: 'foo@example.com'},
        {id: 2, name: 'bar', email: 'bar@example.com'},
        {id: 3, name: 'baz', email: 'baz@example.com'}
      ]);
    });
};
