const numberReducer = (state, action) => {
    switch (action.type) {
        case "Add":
            return state + action.val;
        case "Subtract":
            return state - action.val;
        default:
            return state;
    }
}

export default numberReducer;