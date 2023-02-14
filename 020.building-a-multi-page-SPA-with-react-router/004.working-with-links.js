/*

    Working with Links

    In react we can also use links to navigate to different urls and render the component attached on that url.

    Links are on the page which take us to another page when clicked on it.

    Components consists of the files which are injected in our pages or App component.

    Whenever we are using the HTML element link for the user to navigate to a new page, we are sending a fresh
    request to the server for fetching the data. The HTML file is loaded everytime we click on one of the link.

    This works and we get different pages, but it also means that we leave the active single-page application and
    we start a new one. When we click on one of these links we lose the application state that we might have
    in this application. This goes against the idea of creating new one pager applications.

    The link component from react-DOM allows us to create a new link and navigate to the desired url.
    The link component takes an attribute in which we specify the path.
    Features of the link tag:
        1. React internally listens to this tag when clicked
        2. It prevents the browser from refreshing
        3. It manually updates the url
        4. Switch the page and change what we see on the screen

    Link builds up the illusion that we are changing pages, however we stay on the same page and do not lose
    our state.

 */