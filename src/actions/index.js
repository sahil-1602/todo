export const addTodo = (task, desc, due, status) => {
    return {
        type: "ADD",
        task,
        desc,
        due,
        status
    }
}