import { handleResponse } from './helper';
const getUser =()=> {
    const requestOptions = {
        method: 'GET',
        headers:{'Content-Type': 'application/json'}
    };
    return fetch('https://work-java-1.herokuapp.com/userall', requestOptions)
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
    
        
    return fetch('https://work-java-1.herokuapp.com/addacount', requestOptions)
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