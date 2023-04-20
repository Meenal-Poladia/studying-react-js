/*

    Creating Dynamic Pages with Parameters

    Sometimes it might happen that we want to view just one page but with different content. Thus, we can create a
    dynamic page which displays the content according to the data from the API.

    In such a situation, we load the same page but the content in it changes.
    We use a special syntax understood by nextJs to indicate dynamic routing.

    Using square brackets in our file name, tells nextJS that this will be a dynamic page so that it should
    be loaded for different values in our path and then we can add an identifier between those square brackets
    where the identifier name is totally up to us.
    eg: [newsId].js will be the route name

    It's a feature that allows us to build truly dynamic and flexible websites with nextJS.

 */