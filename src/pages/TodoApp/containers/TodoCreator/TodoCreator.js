import React, { useContext, useEffect } from 'react'
import { useFormik } from 'formik'
import TodosContext from '../../../../state/todos/Context'
import * as todosActions from '../../../../state/todos/actions'

function TodosCreator(){
    const { todos, dispatchToTodos } = useContext(TodosContext)

    useEffect(() => {
        console.log(todos)
    }, [todos])
    
    const formik = useFormik({
        initialValues: {
            title: ''
        },
        onSubmit: (values) => {
            dispatchToTodos(todosActions.addTodo(values.title))
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}> 
            <input 
            type="text"
            placeholder="Nova Tarefa"
            autoComplete="off"
            {...formik.getFieldProps('title')} 
            />

            <button type="submit"> Adicionar tarefa</button>
        </form>
    )
}

export default TodosCreator