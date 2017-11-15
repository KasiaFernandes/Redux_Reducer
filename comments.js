import { ADD_COMMENT, REMOVE_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT, EDIT_COMMENT } from './actions'


const initialState = {
    comments: [],
    users: []
};

/*
function reducer(state, action) {
    if (!state) {
        return initialState;
    }
    return state;
}
*/

function comments(state = [], action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
                , ...state.comments];
        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });
        case THUMB_UP_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return { ...comment, votes: comment.votes + 1 }
                }
                return comment;
            });
        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return { ...comment, votes: comment.votes - 1 }
                }
                return comment;
            });
        case EDIT_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return { ...comment, text: action.text }
                }
                return comment;
            });
        default:
            return state;
    }
}
