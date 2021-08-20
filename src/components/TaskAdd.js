import React from 'react';

/**
 * 할 일 입력 부분
 */
const TaskAdd = ({value, changeHandler, clickHandler}) => {
    return (
        <form className="filed has-addons">
            <div className="control is-expanded">
                <input className="input" value={value} onChange={changeHandler}></input>
            </div>
            <div className="control">
                <button className="button is-primary" onClick={clickHandler}>저장</button>
            </div>
        </form>
    );
}

export default TaskAdd;