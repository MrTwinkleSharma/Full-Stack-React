const dummyList = require('../dummyList.js');
const TaskModel = require('../models/TaskModel.js');

const getTasks = async (req, res) =>{
    const list = await TaskModel.find();
    res.status(200).json({success:true, data:list})
}

const postTask = async (req, res) =>{
    const {title, description} = req.body;
    const task = TaskModel({
        title, 
        description,
        isCompleted:false
    });

    await task.save();
    res.status(201).json({success:true, data:task});
}

const patchTask = async (req, res) =>{
    const {taskId} = req.params;
    const {title, description} = req.body;
    
    const existingTask = await TaskModel.findById(taskId);
    if(!existingTask)
    {
        res.status(404).json({success:false, message:"No task found with given id!"});
    }
    existingTask.title = title;
    existingTask.description = description;
    
    
    res.status(200).json({success:true, data:existingTask}); 
}

const deleteTask = async (req, res) =>{
    const {taskId} = req.params;

    const existingTask = await TaskModel.findById(taskId);
    if(!existingTask)
    {
        res.status(404).json({success:false, message:"No task found with given id!"});
    }
    await existingTask.remove();
    
    res.status(200).json({success:true, message:"Task deleted Successfully!"}); 
}

module.exports = {getTasks, postTask, patchTask, deleteTask};