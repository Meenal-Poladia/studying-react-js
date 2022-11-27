/*

    Sending a get request

    The fetch API is built into browsers and it allows us to fetch data and actually also to send data. The first
    argument that the fetch API takes is the url which is a string, the second argument is an object in which we
    pass headers, parameters, body, method. The default method for fetch API is get request. So, if we do not pass any
    argument then the request is a get request.

    Fetch returns a promise which allows us to then use the response or any error that we can use. Promise is an object
    which will eventually yield some data. Sending HTTP request is an asynchronous task so it will return a promise.
    .then is used to capture the response while .catch shows the potential error. The response is an object which has
    information about the response.

    This API sends back data in a JSON format which is a very popular way of exchanging data. The response object which
    we get has a built-in method, which will automatically translate this JSON response body to a real JavaScript
    object. This returns a promise so we should return the promise and add another block here which will be fired once
    the data transformation is done. We can store the data received from the promise in a state and use it to render it.

    This is how we send http requests from inside React apps to the backend.

    example -
    const [data, setData] = useState([]);

    const handler = () => {
        fetch("url", {
            method: ""
            headers: {}
            parameter: {}
            body: {}
        })
            .then((response) => {response.json()})
            .then((data) => {
                //Changing the key-values according to our data consumption
                const transformedData = data.results.map(movieData => {
                    return {
                        id: movieData.episode_id,
                        title: movieData.title,
                        openingText: movieData.opening_crawl
                    }
                })
                setData(transformedData);
            })
            .catch((error) => {console.log(error)})
    }
 */