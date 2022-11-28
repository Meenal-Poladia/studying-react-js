/*

    Handling loading and data states

    Showing a loading signal while we are fetching data from the API helps the user to know that something is on the
    way.
    We can show the loading of the state by using the useState().
    It is a good practise to let the users know in which state the application currently is. Like there is no content,
    the content is being loaded or the content is loaded and shown to the user.

    example -
    const [isLoading, setIsLoading] = useState(false);

    const handler = async () => {
        setIsLoading(true);
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
        setIsLoading(true);
    }

    return (
        <>
            {isLoading && "Show Loader"}
            {!isLoading && "Show Movies"}
        </>
    )

 */