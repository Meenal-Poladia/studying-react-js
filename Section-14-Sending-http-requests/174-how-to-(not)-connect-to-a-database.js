/*

    How To Not Connect To A Database

    Javascript code running in the browser should not talk directly to database. React App should not establish
    direct connection with the database, this is usually not followed.
    If we connect our javascript code directly with the database then we are exposing our database credentials
    in that code because all javascript code running in the browser can be assessed, read not just by the browser
    but also by the users of the browser. Simply, opening the developer tools we can view all the code there.
    Connecting directly to the database can also lead to performance issues.

    So, for security purposes there is a backend application running on another machine not in the browser but running
    on another server maybe on the same server as the database or a different server
    This backend application can be written with any server-side lang like Nodejs, PHP, ASP.NET. This backend
    server will do the talking to the database and we can safely store the credentials on the backend
    server as the user will not be able to view the credentials there.
    It is on a different server and the users will not be able to view the code.

    Thus in conclusion the react app talks to the backend database and the backend database talks to the server.
    
 */