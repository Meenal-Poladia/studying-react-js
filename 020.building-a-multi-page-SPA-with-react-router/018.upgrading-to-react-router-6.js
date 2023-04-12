/*

    Upgrading to React Router 6

    To install the version 6 of react router dom we use the command -> example 1

    <Switch></Switch> which is used in react router dom for loading just one route at a time has been replaced by
    <Routes></Routes>

    Unlike earlier, the to be rendered component is not a child of the <Route> whereas it is passed as an attribute
    to the <Route>. The Route component becomes a self closing component -> example 2

    Version 6 does not use the term exact at the end of the Route component for it to find the exact match.
    It by default now searches for the exact match only. However, if we want to add the exact path property then we can
    add a star after the path -> example 3

    The order in which the route is stated does not matter in version 6, the router dom goes and evaluates each
    single route and just does not open the first match. It finds route based on the best match and not based on
    their hierarchy.

    <Link> and <Navlink> still remains the same however the activeClassName attribute on <Navlink> does not
    exist any longer. We need to manually apply styles using className. The className is a function which
    gets navData which tells us about the current active link. This parameter is provided by react router to understand
    if the link is active. The navData is an object which contains the isActive property. When the link is active the
    isActive property is true. -> example 4

    Redirect is changed to Navigate. To completely replace the old page with a new page -> example 5

    In version 5, if we are creating nested routes it is not a mandate to wrap them around <Routes>, however,
    in version 6 it is mandatory to wrap even a single <Route> with <Routes>

    Adding nested routes have become easier. When creating a nested route inside the parent component there is
    no need to specify the root route. Only the nested route needs to be specified. -> example 6
    Similarly, Link tag also needs a relative path and not the parent route is required.

    All the parent and children routes can be specified at the same place in the App component. The nested routes
    can be specified at their children -> example 7
    Having all the routes in one place is helpful and reduces confusion rather than having nested routes in
    the parent component.
    After specifying the child route in the App component it is important to also tell react where to display the
    content of the nested route.
    <Outlet> is a new react component which is like a placeholder that tells react where the nested child content
    needs to be displayed.

    useHistory has been replaced by useNavigate which helps react to change routes.
    To replace the old route with the new one -> example 8
    To go back to the previous route -> example 9

    <Prompt> has been removed from the version 5 of react, thus if we want to implement any validation then
    we either need to stick with version 5 or implement our own validation.


    example 1
    npm install react-router-dom@6
    1npm install react-router-dom@latest    -> to get the latest version

    example 2
    <Route path="/" element={<Login/>}

    example 3
    <Route path="/main/*" element={<Main/>}

    example 4
    <Navlink className={(navData) => navData.isActive && classes.Active}>

    example 5
    <Route path= "/" element= {<Navigate to="/welcome" />}/>      // Pushing navigation onto the navigation stack
    <Route path= "/" element= {<Navigate replace to="/welcome" />}/>      // Replacing the current page with new one

    example 6
    <Route path="/main/new-user" element={<Main/>}     --> earlier
    <Route path="/new-user" element={<Main/>}          --> now. No need to mention the root route

    example 7
    <Route path="/parent/*" element={<Parent/>}>
        <Route path="/child1/*" element={<Child1/>}>
        <Route path="/child2/*" element={<Child2/>}>
    </Route>

    example 8
    navigate(`/main`, {replace: true})

    example 9
    navigate(-1)       To go backwards
    navigate(-2)       To go 2 routes backwards
    navigate(1)        To go one route forward

 */