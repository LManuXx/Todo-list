const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task');
const {authRequired} = require('../middleware/validateToken');

router.get('/tasks', authRequired, taskController.getAllTasks);
router.get('/tasks/:id', authRequired, taskController.getOneTask);
router.post('/tasks', authRequired, taskController.addTask);
router.delete('/tasks/:id', authRequired, taskController.deleteTask);
router.put('/tasks/:id', authRequired, taskController.editTask);


module.exports = router;