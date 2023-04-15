/*
    Routing multiple pages in single page application

    Routing means when we append a different path after the domain name like /welcome, then the welcome page loads.
    So, the visible content of the website changes. Different URL paths load different content on the screen.

    When we are building a react application we are building complex user interface where we just send one initial
    HTML request and then this HTML file  with a bunch of extra JavaScript is downloaded, and thereafter the extra
    JavaScript code that runs on the client will actually take care about adjusting what the user sees on the screen.
    That's how single page application works.

    React enables to load a change path and the content on the screen whenever the path changes. So instead of loading
    new HTML files from the backend, we could add some client-side code that simply watches the URL and then loads
    a different React component when that URL changes.

 */