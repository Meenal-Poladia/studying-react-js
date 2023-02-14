/*

    How pre-rendering works and which problems we face

    When the homepage is rendered using nextjs, the html file can be inspected using the right click. But in a scenario
    in which we are using an useEffect when the component renders in which we are using an fetch request to gather data
    the data received from the server is not seen in the HTML because they are only viewed in the second execution
    cycle and the inspect shows the result of the first execution cycle.

 */