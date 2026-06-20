
export const getPosts = async (subreddit) => {
    //const searchParams = new URLSearchParams({ type, query });
    if(!subreddit) {
        subreddit = '';
    }

    const requestUrl = `/mocks/data/${subreddit}posts.json`;

    const response = await fetch(requestUrl, {
        method: 'GET'
    });

    const data = await response.json();

    return data;
};

// Fetches the full posts list for a subreddit, then finds the single post
// matching postId. Mock data is one JSON file per subreddit (no single-post
// endpoint), so we reuse getPosts and filter client-side.
//
// postId arrives from the route param as a string (e.g. "1001"), but
// post.id in the mock JSON is a number — so we convert before comparing.
export const getPost = async (subreddit, postId) => {
    const { posts } = await getPosts(subreddit);
    const post = posts.find((p) => String(p.id) === String(postId));
    return post; // undefined if not found — handled in PostDetail
};