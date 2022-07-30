import { useEffect, useReducer } from 'react';
import { todoReducer } from '../09 - reducer/todoReducer';


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}
//segundo combinamos el state con el dispach ya que dependen del state anterior
export const useTodos = () => {
  
    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ) );
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }
    const handleEditTodo = (id, texto) => {
        dispatch({
            type: '[TODO] Edit Todo',
            payload: { id, texto }
        })

    }



    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        handleEditTodo,
    }

}
