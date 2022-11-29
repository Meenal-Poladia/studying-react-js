/*

    Sending post requests

    Fetch is also used to send a post request. Fetch request takes a second argument which is an object which
    helps us to set the method, headers, parameter and body. By default fetch sends a get request.
    Sending a post request creates a resource in the backend.

    We need to add the resource which we want to store to the backend which is the body of the fetch request object.
    The body does not want an object instead it wants an JSON data. JSON is the data format which is used for
    exchanging data between the frontend and backend. To convert the javascript object into JSON we can use the utility
    method that exists in Javascript.

    example -
    fetch("url", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    })
 */