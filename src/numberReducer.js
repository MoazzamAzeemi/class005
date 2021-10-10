const numberReducer = (state, action) => {
    switch (action) {
        case "Add":
            return state + action.value;
        case "Subtract":
            return state - action.value;
        default:
            return state;
    }
}

export default numberReducer;