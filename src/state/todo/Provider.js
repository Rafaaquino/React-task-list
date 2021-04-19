import React, { useReducer } from 'react'
import TodoContext from './Context'
import todoReducer from './reducer'

function Provider({children}) {
    const [todos, dispatchToTodo] = useReducer(todoReducer, 'all')
    return (
        <TodoContext.Provider value={{todos, dispatchToTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export default Provider