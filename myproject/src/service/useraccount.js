import { handleResponse } from './helper';
const getUser =()=> {
    const requestOptions = {
        method: 'GET',
        headers:{'Content-Type': 'application/json'}
    };
    return fetch(`http://localhost:8080/userall`, requestOptions)
        .then(handleResponse)
        .then((todos) => {
            return todos;
            
        });
};
const createTodos =(data)=> {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data) 
       
    };
    
        
    return fetch(`http://localhost:8080/addacount`, requestOptions)
        .then(handleResponse )
        .then((res) => { return res} 
        );
               
        
};

const updateTodos =(id, data)=> {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(`/todos/${id}`, requestOptions)
        .then(handleResponse)
        .then((res) => {
            return res;
        });
};

const deleteTodos =(id)=> {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`/todos/${id}`, requestOptions)
        .then(handleResponse)
        .then((res) => {
            return res;
        });
};

export const todosService = {
    getUser,
    createTodos,
    updateTodos,
    deleteTodos
};