/*

    Handling http errors

    Error handling is also an important part of a great user experience as it lets the user know if there is an error or
    some glitch while processing the request.
    Error can be shown to the user by managing an error state. In .then and .catch we use the .catch to show or manage
    any error. While using async-await we use the try and catch so manage error.

    To know whether the response was successful or not we use the response.ok. if the !response.ok then we can trow an
    error which gets handled in the catch block. Once it reaches the !response.ok block the further code is not
    executed if there is an error.

    It is a good practice to show different error with various failure messages as it lets the user know the reason
    behind the failure.

    example -
    const [error, setError] = useState(null);

    const handler = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch("url");

             if(!response.ok) {
                throw new Error("Something went wrong");
            }

            const data = await response.json();
            const transformedData = data.results.map(movieData => {
                return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    openingText: movieData.opening_crawl
                }
            })
            setData(transformedData)
        }
        catch(error) {
            setError(error.message);
        }
        setIsLoading(false);
    }

    return (
        <>
            {error && <p> Something went wrong </p>}
        </>
    )

 */