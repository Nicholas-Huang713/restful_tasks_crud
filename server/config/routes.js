const tasks = require('../controllers/tasks');

module.exports = (app) => {
    app.get("/task", tasks.index),
    app.get('/task/:id', tasks.getTask),
    app.post('/task/create', tasks.createTask),
    app.put('/task/edit/:id', tasks.updateTask),
    app.delete('/task/delete/:id', tasks.deleteTask)
};