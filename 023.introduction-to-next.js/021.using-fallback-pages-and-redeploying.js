/*

    Using fallback pages and redeploying

    When fallback in set to true or "blocking" NextJs will not respond with 404 page if it cat find a page
    immediately because setting it to true or "blocking" means that there might be other paths other than the one
    mentioned below. It will generate the page on demand and thereafter cache it or will pre-generate it when needed.

    The difference between true and blocking is that with true it will immediately return and empty page than show
    the dynamically generated content once thats done.
    With blocking the user will not see anything until the page is generated and the finished page will be served.
    We need to again commit the changes and push them to the same branch.

    Once Vercel detects that there are changes made on the git repository then it automatically starts building and
    re-deploying the app again. Once the new page is ready, it will automatically bring down the older version and
    replace it with newer one.

 */