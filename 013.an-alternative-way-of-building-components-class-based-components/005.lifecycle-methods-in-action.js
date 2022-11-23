/*
    Lifecycle methods in action

    We use the componentDidUpdate method to run an useffect which runs on the state being changed. If we simply write
    the lifecycle method then it runs everytime something is changed in the component. However, if we want it to run
    only when the state changes then we compare the previous state with the new state -> example 1

    In useffect we do not need an if check, we directly add the state in the dependency array while in
    componentDidUpdate we need to manually check if the state is different than the new state.

    If we want to fetch data of a particular user once the component is on the DOM then we use the lifecycle method
    of componentDidMount() which is called immediately once the component is rendered on the DOM. This method runs only
    once when the component is mounted on the DOM unlike componentDidUpdate() which run whenever the component is
    re-evaluated. -> example 2
    componentDidMount is usually used to make HTTP calls or fetch data and render once the page is laoded.

    componentWillUnmount() is a lifecycle method that is called when the component is being removed fom the DOM.

    All these lifecycle methods are run for every component instance.

    example 1
    componentDidUpdate(previousProp, previousState) {
        if(previousState.searchTerm !== this.state.searchTerm) {
            //Code goes here if the state changes
        }
    }

    example 2
    componentDidMount() {
        //HTTP request goes here
        this.setState({filteredUsers: DUMMY_USERS})
    }

 */