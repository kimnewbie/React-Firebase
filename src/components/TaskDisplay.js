import React from 'react';

const TaskDisplay = ({todo, deleteHandler}) => {
    const taskDisplay = todo
        .tasks
        .map((task, i) => {
            return (
                <div key={i} className="box">
                    <div className="level">
                        <div className="level-left">
                            <span className="title">{task.todo}</span>
                        </div>
                        <div className="level-right">
                            <button className="button is-danger" onClick={() => deleteHandler(i)}>삭제</button>
                        </div>
                    </div>
                </div>
            );
        })
    return taskDisplay;
}

export default TaskDisplay;