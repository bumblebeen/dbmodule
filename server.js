const app = require('express')();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

const db = require('./db');

app.use(bodyParser.json());

app.get('/todos/:id?', (req, res) => {
    let todos = db.select().from('todos');
    if (req.params.id)
        todos = todos.where('id', req.params.id);
    todos.then((todos) => {
        return res.json(todos);
    });
});

app.post('/todos', (req, res) => {
    db('todos').insert({
        title: 'go play some sports',
        user_id: 1,
    })
    .then((todos) => {
        return res.json(todos);
    });
});

app.put('/todos/:id', (req, res) => {
    db('todos')
        .where('id', '=', req.params.id)
        .update({
            title: req.body.title,
            user_id: req.body.user_id,
            completed: req.body.completed
        })
    .then((todos) => {
        return res.json(todos);
    })
    .catch(err => res.json(err));
});

app.delete('/todos/:id', (req, res) => {
    db('todos')
        .where({
            id: req.params.id,
            user_id: req.body.user_id,
        })
        .del()
    .then((todos) => {
        return res.json(todos);
    })
    .catch(err => res.json(err));
});

app.get('/user/:id/todos', (req, res) => {
    db.from('todos')
        .innerJoin('users', 'todos.user_id', 'users.id')
        .where('todos.user_id', req.params.id)
        .then((todos) => {
            return res.json(todos);
        });
});

app.listen(PORT, () => {
    console.log('Listening at ', PORT);
});
