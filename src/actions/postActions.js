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

export const getPostsSuccess = () => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE,
});
