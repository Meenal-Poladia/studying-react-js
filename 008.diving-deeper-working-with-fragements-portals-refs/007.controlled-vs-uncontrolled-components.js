/*

    Controlled vs uncontrolled components

    Controlled: A Controlled Component is one that takes its current value through props and notifies changes
    through callbacks like onChange.
    A parent component "controls" it by handling the callback and managing its own state and passing
    the new values as props to the controlled component. You could also call this a "dumb component".

    Uncontrolled: Uncontrolled components are those whose internal state or value which we store is not controlled by
    react. For example - We rely on the default behavior of the input where a user is able to enter something and we
    just fetch the value using a react feature but we don't feed data back into the input.

 */