import uuid from "uuid/dist/v4";
export const todoReducer = (state=[], action) => {
    switch(action.type){
        case "ADD":
            return [...state, 
                {
                    id: uuid(),
                    title: action.task,
                    desc: action.desc,
                    due: action.due,
                    status: action.status
                }
            ];
        case "REMOVE":
            return state.filter(todo => todo.id !== action.id);
        case "EDIT":
            return state.map(todo => (
                todo.id === action.id ? {
                    ...todo,
                    title: action.task,
                    desc: action.desc,
                    due: action.due,
                    status: action.status
                } : todo
            ));
        default:
            return state;
    }
}

// title description due status 