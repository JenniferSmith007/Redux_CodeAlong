import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../actions/postActions";
import { Post } from "../components/Post";
// the connect function is higher order function that connects the redux store to a react
// component

// redux state is now in the props of the component ({dispatch,loading,posts,hasErrors})

const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  // because of side effects and async calls ^^

  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p> unable to display</p>;
    return posts.map((post) => <Post key={post.id} post={post} />);
  };
  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
});
export default connect(mapStateToProps)(PostsPage);

//The Thunk middleware is what allows dispatch to accept a function

//"connect" connects components, connected component is now a container
//

//state = store
