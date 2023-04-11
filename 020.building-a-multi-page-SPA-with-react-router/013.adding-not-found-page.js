/*

    Adding Not Found Page

    When the user enters some unsupported path then there must be a way to let the user know that no content
    exists for that route. To show this, not found page is created. This page is also called as the fallback page,
    which means that when nothing shows up then the fallback route appears.

    This can be done when setting the route to *, which means that when there is no route specified from the
    above route then the fallback route appears. This route must come last so that the router passes through all the
    above routes before executing the fallback route.

 */