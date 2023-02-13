/*

    What is Routing and Why

    Overall in websites when the path or address changes the visual content rendering on the screen also changes.
    Traditionally, when we wanted to change the page of our application we sent a request to the backend
    which got our HTML file rendered and thus for each changing page it parsed a different HTML page.
    A request was sent from the frontend to the backend and when the request response cycle completed it is then
    that the page would load.

    However, in react we follow a different approach. In react we have a single html file which is loaded initially
    when the user first visits the website and there after javascript takes over. The advantage of this is that
    we can look at the URL, manipulate the URL and its path with javascript. We can also change what we see on
    the screen when the URL changes or when a link is clicked without fetching a new HTML file.

    So, in react we need to work on listening to the clicks on the link of our page to update that path into URL,
    which actually does not send a request for the HTML file rather updates what's visible on the screen with
    javascript.

    React Router is the library which listens for the event, changes the URL and renders the code when on the
    particular URL.

 */