/*
    Preparing paths with getStaticPath and working with fallback pages

    getStaticPaths is a function we need to export in a page component file. If it's a dynamic page and we are using
    getStaticProps then we need to export getStaticPaths. getStaticPaths is a function which can be async a function
    which returns an object where we describe all the dynamic segment values for which the page should be
    pre-generated.

    For nextjs to pre-generate path it is important for it to have the dynamic id as well so that it can fetch data
    for those pages. However, it is not possible to pre-generate all the pages data as multiple combinations are
    possible so in such a case we can select the few famous pages and add them to the below list for static data.
    But if we have dynamic data then we need to make a fetch call and later pass it to the object. -> example 1

    If there are more than 2 dynamic id then we pass both of them in the object. -> example 2

    Another important key that we need to add to the return object is fallback, this key takes a boolean value which
    means that fallback: true, means others then the objects specified in the path, if there are any other paths
    then generate them during runtime rather then pre-generating them while fallback: false means that throw an error
    if there is any other path called except for teh below mentioned ones.

    example - 1
    export async function getStaticPaths(){
        return {
            fallback: false,
            paths: [
                {
                    params: {
                        meetupId: "m1"
                    }
                },
                {
                    params: {
                        meetupId: "m2"
                    }
                },
            ]
        }
    }

    example - 2
    {
        params: {
            meetupId: "m1",
            participantId: 111,
        }
    },

 */