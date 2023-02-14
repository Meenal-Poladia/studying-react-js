/*

    Sending A Get Request

    Axios is an external library for making HTTP requests. However, request can also be made using built-in
    mechanism of fetch APi using Javascript code. Fetch API allows us to send request to the server for getting data
    and sending data. The fetch API is built-in browsers.

    While creating a fetch APi inside react the first argument is the url and the second argument is an object which
    can hold headers, body or method -> example 1
    The default method is get, so if we want to do any other request then we need to change it in the object.
    Fetch returns a promise which allows us to then react to the response or anu potential errors that we might
    get.
    Sending HTTP request is an asynchronous task which does not finish easily and takes a couple of second or
    milliseconds.

    In response we can read the response provided by the API, header, status code. There is an utility ok field which
    will return true when the response is successful and false when there is a failure.

    JSON is simply a data format, a very popular one for exchanging data. It looks like a JavaScript object
    but keys are wrapped between double quotes. There are no methods, it's just data and the advantage of JSON data
    is that it's very easy to translate it to JavaScript objects but there is a translation step, which is needed.
    The response object which we get have as built-in method, which will automatically translate this
    JSON response body to a real JavaScript object. When passing a body in the post request we cannot pass
    our javascript code, thus we use JSON.stringify to convert it into JSON object.
    -> example 2
    response.json also returns a promise which needs to be handled using .then

    Sending a post request -> example 2



example 1
function fetchMoviesDatahandler = () => {
    fetch(`url`, {
        method: ,
        headers: ,
        body:
    })
    .then(response => it returns a successful response)
    .catch(error => it returns error)
}

example 2
function testingFetch = () => {
    fetch(`url`)
    .then(response => return response.json)
    .then(data => )
}

example 2
function postRequest = () => {
    fetch(`url`, {
        method: ,
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(objectName)
    })
    .then(response => it returns a successful response)
    .catch(error => it returns error)
}
 */