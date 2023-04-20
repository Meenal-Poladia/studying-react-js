/*

    Linking between Pages

    Whenever we want to open a new page by clicking on something from the previous page then we use the anchor tag from
    html to link the text with opening a new page.

    But in nextJs if we use an anchor tag then we are sending a new request each time we click on the text.
    Thus, multiple requests are generated. As react is a one page application and we do not send request for
    loading a new html page, we use a component provided by nextJs <Link> which navigates the user to the
    new page and at the same time the page isn't refreshed or a new request is not sent for fetching html file.

    Link tag takes an href attribute in which we mention the path on which we need to navigate the user.

    example -
    <Link href="/news/new-page">
        Click here to go to the new page
    </Link>

 */