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