import React from 'react';

const TaskAdd = ({value, changeHandler, clickHandler}) => {
    return (
        <div>
            {/* 할일 입력 부분 */}
            <form>
                <input value={value} onChange={changeHandler}></input>
                <button onClick={clickHandler}>저장</button>
            </form>
        </div>
    );
}

export default TaskAdd;