export const getPosts = async (type = '') => {
    const searchParams = new URLSearchParams({ type });
    const requestUrl = `/posts?${searchParams.toString()}`;

    const response = await fetch(requestUrl, {
        method: 'GET'
    });

    const json = await response.json();

    return json;
};
