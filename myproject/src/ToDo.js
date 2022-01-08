import React from 'react';
import TitleBox from '../components/TitleBox'
import TodoForm from '../components/TodoForm'
import TodoItems from '../components/TodoItems'

const ToDoList = () => {
    return (
        <div className="container">
            <TitleBox/>
            <div className="todo-box">
                <TodoForm/>
                <TodoItems/>
            </div>
        </div>
    );
};

export default ToDoList;