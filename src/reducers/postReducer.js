import * as actions from "../actions/postActions";

export const initialState = {
  posts: [],
  loading: false,
  hasErrors: false,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS:
      return { ...state, loading: true };
    case actions.GET_POSTS_SUCCESS:
      return { posts: action.payload, loading: false, hasErrors: false };
    case actions.GET_POSTS_FAILURE:
      return {...state, loading: false, hasErrors: true };

    default:
      return state;
  }
}

//reducers take in a state and action

// once actions are ready then do reducers. Redux way.

// *, means everything

//for each action, make a case (switch statement) that returns the
//enitre state plus whatever change that is being made to it

//example: case actions.GET_POSTS:  return //{ ...state, //loading: true }
