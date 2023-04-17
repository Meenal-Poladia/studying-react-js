/*

    Server side routing and required configurations

    In a SPA we can navigate between different pages and different routes. So, this happens using the react-router-dom
    package which is a library used by react. So, it is a client side package, it is not being executed on the server.

    When the user application is deployed on the server and a user enters a URL in the browser, the browser sends
    a request to the server. The server then gives backs a response with the HTML file, Javascript file that makes up
    the application. The server tries to find a path that fits with the entered URL. If it is a client side application
    then the browser goes to search for a file on the server then the request would fail. What the server should
    instead do is return the same HTML file and Javascript file so that the path that we requested for can be resolved
    on the client side.

    Adding the configuration that our application is client side routing tells firebase to return the same index.html
    whenever a request is made.

 */