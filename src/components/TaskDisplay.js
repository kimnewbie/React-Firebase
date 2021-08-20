import React from 'react';

const TaskDisplay = ({todo, deleteHandler}) => {
    const taskDisplay = todo
        .tasks
        .map((task, i) => {
            return (
                <div key={i}>
                    <span>{task.todo}</span>
                    <button onClick={() => deleteHandler(i)}>삭제</button>
                </div>
            );
        })
    return taskDisplay;
}

export default TaskDisplay;