import React from 'react';

const TaskDisplay = ({todo, deleteHandler}) => {
    console.log(todo)
    const taskDisplay = todo
        .tasks
        .map((task) => {
            return (
                <div key={task.id} className="box">
                    <div className="level">
                        <div className="level-left">
                            <span className="title">{task.todo}</span>
                        </div>
                        <div className="level-right">
                            <button className="button is-danger" onClick={() => deleteHandler(task.id)}>삭제</button>
                        </div>
                    </div>
                </div>
            );
        })
    return taskDisplay;
}

export default TaskDisplay;