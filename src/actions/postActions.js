export const GET_POSTS = `GET_POST`;

export const GET_POSTS_SUCCESS = `GET_POSTS_SUCCESS`;
export const GET_POSTS_FAILURE = `GET_POSTS_FAILURE`;

//Creating redux action types-
//-------------------------------
// get posts: redux will fetch posts from an API
// get posts success: passing the posts to redux on a successful api call
// get post failure: informing redux, if error was encountered durring redux
//on a failed api call
// ---------------------------------------
// create action creators, which are functions that return and action
// which consists of the type and an optional payload loading data

// writting a function creator
// regular () with {} inside returns an object ({})
export const getPosts = () => ({
  type: GET_POSTS,
});

export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE,
});

// Finally, make the asynchronous
//thunk action that combines all three of the above actions.
// When called, it will dispatch the initial getPosts()
// action to inform Redux to prepare for an API call,
//then in a try/catch,
//do everything necessary to get the data,
// and dispatch a success or failure action as necessary.

export function fetchPosts() {
  return async (dispatch) => {
    dispatch(getPosts());
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const data = await response.json();
      dispatch(getPostsSuccess(data)); // if success pass in post, payload post will post if success,
      //take data from json call and put it for the get post
    } catch (error) {
      dispatch(getPostsFailure());
    }
  };
}

//dispatch is method avalible in store, (wrapped in provider)
// object that accepts an object which is used to update the redux state.
// usally this object is envoking an action creator.
