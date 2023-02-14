/*
    Working with params for SSG

    On getStaticProps be context.params, and that will be an object where our identifiers between the square brackets
    will be properties and the values will be the actual values encoded in the URL. -> example 1

    So our meetup ID, for example, could be accessed with context.params.meetupid.

    example 1

    export async function getStaticProps(context) {

    const meetupID = context.params.meetupid

    //Fetch data from API
    return {
        props: {
            meetupData: {
                id: "m1",
                title: "The First Meetup",
                address: "Some country, some city",
                image: {IMAGELINK},
                description: "This is the first Meetup"
            }
        },
        revalidate: 10
    }
}
 */