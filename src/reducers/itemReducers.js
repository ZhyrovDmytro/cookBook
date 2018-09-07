import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, ERROR } from '../actions/types'

const initialState = {
    items: [],
    error: '',
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter((item) =>
                    item._id !== action.payload
                    )
            };
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            };
        case ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}