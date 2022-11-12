/*

    Introducing react context API

    When we are building a big application we might come across a problem wherein we need to pass some props to the
    child component from the root component. In such a scenario even though the in-between components do not need the
    props we pass them with props as we need to pass them down the chain.

    The solution for this is to pass the props only to those components where they are needed rather than passing them
    down the chain. This in react is called as React Context.
    In react context we trigger an action in that component-wide state storage, and then directly pass that to the
    component that is interested without building such a long prop chain.

 */