const {Task} = require('../models/Task');

exports.getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find({user:req.user.id}).populate('user');
        res.json(tasks);

    }catch(error){
        console.log(error)
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

exports.addTask = async (req, res) => {
    try{
        const {title, description} = req.body;
        const task = new Task({
            title,
            description,
            user:req.user.id
        });

        await task.save();
        return res.status(200).json({
            task
        })

    }catch(error){
        console.log(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

exports.deleteTask = async (req, res) => {
    try{
        const taskId = req.params.id;
        await Task.findByIdAndDelete(taskId);
        res.sendStatus(204);

    }catch(error){
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

exports.getOneTask = async (req, res) => {
    try{
        const taskId = req.params.id;
        const task = await Task.findById(taskId).populate('user');

        if (!task) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }

        res.json(task);

    }catch(error){
        res.status(500).json({ message: 'Error en el servidor' });
    }
}

exports.editTask = async (req, res) => {
    try{
        const taskId = req.params.id;
        const task = await Task.findByIdAndUpdate(taskId, req.body, {new:true});

        if (!task) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }

        res.json(task);

    }catch(error){
        res.status(500).json({ message: 'Error en el servidor' });
    }
}



