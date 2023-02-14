/*
    Introducing API routes

    NextJS makes it easy for us to build an API, a backend API, together with our front-end React app in the same
    project.
    API routes are a special routes which accept incoming HTTP requests like post, put, patch and delete, it also
    allows us to store and retrieve data like the JSON object.

    To add API routes we add a special folder inside the pages folder called as the api. The NextJS will pick up
    any JavaScript files stored in there and turn those files into API routes. In these routes we will define functions
    which contains server-side code because API routes will only run on the server never on the client. The function
    is triggered whenever a request is sent to this route like api/new-meetup -> example 1


    The function receives 2 parameters the request and the response object. The request has the details about the
    incoming request and the response object will be needed to sending back response. Through the request object we
    get properties like headers, method.

    example - 1
    pages folder -> api folder -> new-meetup

    function handler(request, response){
        if(request.method === "POST"){
            const data = request.body;

            const {title, image, address, description} = data
        }
    }
    export default handler;
 */