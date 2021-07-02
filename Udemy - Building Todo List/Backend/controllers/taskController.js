const dummyList = require('../dummyList.js');

const getTasks = (req, res) =>{
    res.status(200).json({success:true, data:dummyList})
}

const postTask = (req, res) =>{
    const {title, description} = req.body;
    const task = {
        title, 
        description,
        isCompleted:false
    };

    dummyList.push(task);
    res.status(201).json({success:true, data:dummyList});

}

const patchTask = (req, res) =>{
    const {taskId} = req.params;
    console.log(taskId);

    const {title, description} = req.body;
    let found = false;

    const updatedList = dummyList.map(listItem =>{
            if(listItem.title==taskId)
            {
                listItem.title=title
                listItem.description=description
                found=true;
            }
            return listItem;
        });

    if(!found)
    {
        res.status(404).json({success:false, message:"No task found with given id!"});
    }
    else
    res.status(200).json({success:true, data:updatedList}); 
}

const deleteTask = (req, res) =>{
    const {taskId} = req.params;

    const updatedList = dummyList.filter(listItem=>listItem.title!==taskId);

    if(updatedList.length===dummyList.length)
    {
        res.status(404).json({success:false, message:"No task found with given id!"});
    }
    else
    res.status(200).json({success:true, message:"Task deleted Successfully!"}); 
}

module.exports = {getTasks, postTask, patchTask, deleteTask};