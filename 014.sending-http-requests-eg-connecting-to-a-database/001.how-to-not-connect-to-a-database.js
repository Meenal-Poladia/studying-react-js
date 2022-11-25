/*

    How to not connect to a database

    Browser side code should not directly talk to database.

    Our react app cannot directly talk to the database server because if this happens then all our database credentials
    running in the browser can be accessed and read not just by our browser but also by the users using the website.

    Connecting to a database directly not just leads to performance issues but security problems also.

    Rather than directly talking to the database server, we have a backend application running on another machine which
    helps to link the client side with the database. Backend applications can be written in PHP, ASP.NET or Node.js.
    which do the talking to the database. We can safely and securely save the credentials for the database in the
    backend code as it is on a different server and users will not be able to see the code.

 */