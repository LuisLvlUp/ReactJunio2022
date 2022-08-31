export const reducer = (state, action) => {
    let innerState;
    switch (action.type) {
        case "COMPLETE":
            innerState = state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
            return innerState
        case "DELETE":
            innerState = state.filter((todo) => todo.id !== action.payload.id);
            return innerState;
        case "CREATE":
            break;
        case "EDIT":
            break;
        default:
            console.log(state)
            return state;
    }
};