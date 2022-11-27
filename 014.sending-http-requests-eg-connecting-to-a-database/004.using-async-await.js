/*

    Using async await

    When dealing with promises we can use either .then chain or there is also an alternative to this method which is
    using the async and await syntax.

    We can use the async keyword in front of the function and then use the await keyword which is returning a promise.
    Behind the scenes async-await also does the same as .then and .catch. It is just that it is a bit easier to read.

    example -
    const handler = async () => {
        const response = await fetch("url");
        const data = await response.json();
        const transformedData = data.results.map(movieData => {
            return {
                id: movieData.episode_id,
                title: movieData.title,
                openingText: movieData.opening_crawl
            }
        })
        setData(transformedData);
    }

 */