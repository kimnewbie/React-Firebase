import React, {useState, useEffect} from "react";
import TaskAdd from './components/TaskAdd';
import TaskDisplay from "./components/TaskDisplay";
import 'bulma/css/bulma.min.css';
import {firestore} from "./firebase/firebase";

function App() {
    const [todo, setTodo] = useState({tasks: [], task: ""});

    const onClickHandler = (e) => {
        e.preventDefault(); // todo 입력하면 새로고침되서
        firestore
            .collection('todo')
            .add({todo: todo.task})
            .then(r => {
                const tasks = [
                    ...todo.tasks, {
                        todo: todo.task,
                        id: r.id
                    }
                ]
                setTodo({tasks, task: ''})
            })
    };
    const onChangeHandler = (e) => {
        setTodo({
            ...todo,
            task: e.target.value
        });
    };
    const deleteHandler = (id) => {
        firestore
            .collection('todo')
            .doc(id)
            .delete()
            .then(() => {
                const tasks = todo
                    .tasks
                    .filter((task, i) => task.id !== id)
                setTodo({tasks})
            })
        // setTodo({ tasks: todo .tasks .filter((task, i) => i !== idx), task: ''
        // undefined일 때 ''가 들어가도록 })
    }

    useEffect(() => {
        const tasks = [...todo.tasks]
        firestore
            .collection('todo')
            .get()
            .then(docs => {
                docs.forEach(doc => {
                    tasks.push({
                        todo: doc
                            .data()
                            .todo,
                        id: doc.id
                    })
                })
                // setTodo({tasks: tasks})
                setTodo({tasks})
            })
    }, [])

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
