/*

    More on Static Site Generation

    npm run build is the command used to deploy our nextjs application.

    There are problems also being faced when we use getStaticProps. One pretty big problem, which we could face in
    some websites, depending on what we're doing is that the data here could be outdated as the API call is fired when
    and the data is gathered once the app is deployed.
    For data which can change frequently we can return an extra property on the object called revalidate. When we add
    this property we unlock a feature called incremental Static Generation. Revalidate wants a number, the number
    of seconds NextJS will wait until it regenerates this page for an incoming request. It means that the revalidate
    will not be generated just during the build process but also after a couple of seconds on the server atleast if
    there are request for the page. This ensure that the data is not older than 10 seconds. -> example 1

    Revalidate will ensure that the page will occasionally be re pre-generated on the server after deployment
    so that we don't have to redeploy and rebuild all the time just because some data changed.

    example 1
    export async function getStaticProps() {
    //Fetch data from API
        return {
            props: {
                meetups: DUMMY_DATA,
            },
            revalidate: 10
        }
    }
 */