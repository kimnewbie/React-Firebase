import React, {useState} from "react";
import TaskAdd from './components/TaskAdd';
import TaskDisplay from "./components/TaskDisplay";
import 'bulma/css/bulma.min.css';

function App() {
    const [todo, setTodo] = useState({
        tasks: [
            {
                todo: "할일 1"
            }, {
                todo: "할일 2"
            }, {
                todo: "할일 3"
            }, {
                todo: "할일 4"
            }
        ],
        task: ""
    });

    const onClickHandler = (e) => {
        e.preventDefault(); // todo 입력하면 새로고침되서
        const task = {
            todo: todo.task
        };
        const tasks = [
            ...todo.tasks,
            task
        ] // 새로추가해도 남도록
        setTodo({
            tasks, task: "", // 저장됐으니까 초기화
        });
    };
    const onChangeHandler = (e) => {
        setTodo({
            ...todo,
            task: e.target.value
        });
    };
    const deleteHandler = (idx) => {
        setTodo({
            tasks: todo
                .tasks
                .filter((task, i) => i !== idx),
            task: '' // undefined일 때 ''가 들어가도록
        })
    }
    return (
        <div className="container">
            <TaskAdd
                value={todo.task}
                changeHandler={onChangeHandler}
                clickHandler={onClickHandler}/>
            <div>
                {/* 할일 출력 부분 */}
                {/* { todo.tasks[0].todo } */}
                <TaskDisplay todo={todo} deleteHandler={deleteHandler}/>
            </div>
        </div>
    );
}

export default App;
