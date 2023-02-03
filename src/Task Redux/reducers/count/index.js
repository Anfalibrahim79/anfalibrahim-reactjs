import { INCREMENT, DECREMENT, RESET } from "../../actions/countAction";

const initialState = {
    count : 0,
    history : []
}

const CounterReducer = (state = initialState, action) => {
    switch (action.type){
        case INCREMENT:
            return state.count + 1
        case DECREMENT:
            return state.count - 1
        case RESET:
            return initialState.count
        default:
            return state;
    }
}
export default CounterReducer