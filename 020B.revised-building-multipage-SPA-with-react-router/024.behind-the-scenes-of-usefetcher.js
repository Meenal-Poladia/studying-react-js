/*

    Behind the scenes with useFetcher

    useFetcher is a hook we can use if you want to trigger a loader or an action without actually loading the page,
    the route to which this action or loader belongs.
    useFetcher submits our data without any route change after submission.
    We need to use the hook on the form Element -> example 1

    example 1
    const fetcher = useFetcher();

    <fetcher.Form>
        //Form goes here
    </fetcher.Form>

 */