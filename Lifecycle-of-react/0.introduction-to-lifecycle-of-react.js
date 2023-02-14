/*

    Introduction to Lifecycle of React JS

    Every React Component has a lifecycle of its own, lifecycle of a component can be defined as
    the series of methods that are invoked in different stages of the component’s existence.

    Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.
    The three phases are: Mounting, Updating, and Unmounting.

    React follows a default procedure in the Naming Conventions of these predefined functions where the functions
    containing “Will” represents before some specific phase and “Did” represents after the completion of that phase.

    1. Mounting
    - constructor()
    - getDerivedStateFromProps() / componentWillMount
    - render()
    - componentDidMount()

    2. Updating
    - getDerivedStateFromProps()
    - shouldComponentUpdate()
    - render()
    - getSnapshotBeforeUpdate()
    - componentDidUpdate()

    3. Unmounting
    - componentWillUnmount()


 */