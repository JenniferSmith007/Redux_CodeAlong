export const initialState = {
  posts: [],
  loading: false,
  hasErrors: false,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

//reducers take in a state and action
