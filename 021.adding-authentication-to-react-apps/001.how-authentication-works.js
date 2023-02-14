/*

    How Authentication works

    Authentication is needed if content should be protected or not accessible by everyone.
    Authentication begins with sending a request to the backend server with user credentials. The backend then checks
    if the user details are valid or there is a requirement to create new user. The server will send us back a response
    that basically gives us permission to access the protected resources.

    The server just not sends us with a yes or no. There are two main solutions for it: server side sessions and
    authentication tokens.

    In Server Side Sessions, we store the yes of a valid user with an unique identifier and then the same identifier
    to the client. Client then sends the same identifier along with the requests to the protected resources.
    Server side sessions are a great way of solving authentication or of enabling authentication but they do require a
    tight coupling between backend and frontend because the backend must store information about the client. With react
    we have the backend decoupled backend API's.

    In Authentication token, we create but do not store the permission token on the server, rather send the token to
    the client. The key is a string which is generated using some algorithm that includes some information about the
    user. The special thing about that token is that it's validity can only be checked and proven by the backend that
    created that token because the token is created with help of some private key which is known by the backend. So,
    when making future requests we send that token along with the request and the backend looks at the request and if
    the token is valid the backend gives access to the protected resources.

 */