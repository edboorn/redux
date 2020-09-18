import fetch from "cross-fetch";

export const SELECT_SUBREDDIT = "SELECT_SUBREDDIT";

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit,
  };
}

export const INVALIDATE_SUBREDDIT = "INVALIDATE_SUBREDDIT";

export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit,
  };
}

export const REQUEST_POSTS = "REQUEST_POSTS";

export function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit,
  };
}

export const RECIEVE_POSTS = "RECIEVE_POSTS";

export function recievePosts(subreddit, json) {
  return {
    type: RECIEVE_POSTS,
    subreddit,
    posts: json.data.children.map((child) => child.data),
    receivedAt: Date.now(),
  };
}

export function fetchPosts(subreddit) {
  return function (dispatch) {
    dispatch(requestPosts(subreddit));
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(
        (response) => response.json(),
        (error) => console.log("An error occurred", error)
      )
      .then((json) => dispatch(recievePosts(subreddit, json)));
  };
}
