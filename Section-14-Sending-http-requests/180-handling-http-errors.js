/*

    Handling HTTP errors

    Sometimes when sending a request there are also chances that due to no internet or bad request there might be a
    failure and thus the promise is not successful. In such cases the error code can be 400, 404 or 500 ish.
    The code is depends upon on the error made by the user.

    200, 201 code are the code which represent success.

    401 and 403 are code for UnAuthorized or Forbidden.
    404 is not found

    When using .then method to consume API request we use the .catch method to handle error. While when using
    async and await we use the try and catch method to display error.
    Error response is an object which a property of response.ok, if this is true then the response is successful while
    if it is false then the response has been failed. Response also has a status field which holds the concrete
    response status code.

    If we want to identify the error before try catch then -> example 1


example 1
Setting this before try catch helps to detect the error fast in the API itself
if(!response.ok) {
    throw new Error(`Something went wrong. Please try again!`)
}

 */