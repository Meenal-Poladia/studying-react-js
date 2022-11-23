/*

    The component lifecycle for class based components

    Class based components do not have useffect for performing side-effects. They have components lifecycle events
    which help to run code at different points in their lifecycle.
    The first, most important life cycle method you can add to class-based components, is to componentDidMount() method
    like render() which is a built in method, this method can used as soon as we mount the component on the DOM. This
    method is only called for the first time when the component is first rendered.

    Important lifecycle methods:
        1. componentDidMount() - It is called when a component is mounted. It is evaluated and rendered when the
        component to mounts on the DOM. It's basically equivalent to using useffect.
        2. componentDidUpdate() - It is called when a component is updated. So, when state changes in the component the
        component is re-evaluated or re-rendered, which is basically equivalent to a useffect with some dependency
        whenever the dependencies change.
        3.componentWillUnmount() - This is called right before the component is removed from the DOM which is basically
        equivalent to clean up function which is used in the useffect cleanup.

 */