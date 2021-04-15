export const addTodo = (task, desc, due, status) => {
    return {
        type: "ADD",
        task,
        desc,
        due,
        status
    }
}

export const deleteTodo = (id) => {
    return {
        type: "REMOVE",
        id
    }
}

export const editTodo = (id, task, desc, due, status) => {
    return {
        type: "EDIT",
        id,
        task,
        desc,
        due,
        status
    }
}

export const toggleTheme = () => {
    return {
        type: "TOGGLE"
    }
}