/*

    Exploring server side rendering with get server side props

    If want to pre-generate the page dynamically on the fly after deployment on the server on every incoming request
    then we can use another function -> example 1
    This function will now not run during the build process, but instead always on the server after deployment. We
    can also perform operations that use credentials as this code will not be exposed to our users and will run only
    on the server. This getServerSideProps function runs for every incoming requests.

    There is a context argument which is passed as a parameter which gets access of the response object and request
    object. Context request van be helpful if we are trying to validate the authentication token or trying to make
    other validations.

    We should really only use getServerSideProps if we need access to that concrete request object, because we don't
    have access to request and response in getStaticProps or if we really have data that changes multiple times every
    second, then therefore even revalidate won't help us.

    example 1
    export async function getServerSideProps(context){
        const request = context.request;
        const response = context.response;

        //fetch data from API

        return {
            props: {
                meetups: DUMMY_DATA
            }
        }
    }

 */