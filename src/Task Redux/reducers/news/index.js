import { GET_LIST_NEWS } from "../../actions/newsAction";

const initialState ={
    getListNewsResult : false,
    getListNewsLoading : false,
    getListNewsError : false,

}

const NewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_NEWS:
            console.log('4. Masuk reducer' , action);
            return{
                ...state,
                getListNewsResult: action.payload.data,
                getListNewsLoading: action.payload.loading,
                getListNewsError: action.payload.errorMessage
            }
        
        default:
            return state;
        
    }
}
export default NewsReducer