/*

    Building the first react component

    It is a good practise to create new components in different files in the component directory.

    App component is the root component which is main component being rendered in the JSX file. All the other components
    will either be nested inside the root component or inside the components itself. Because in react we build a
    component tree in which App component is at the top most component followed by all other components.

    In react it is a basic convention to start the name of the component in capital case and later follow camelcase.
    Components are just functions which then return HTML code. To use the component we need to export it otherwise it
    is usable inside the function itself.
    Functions starting with a lowercase are regarded as custom components so when importing components react doesnt
    go to look for them.

    You create a Component, which is in the end, just a function of returning some HTML code, you then export it.
    And then ultimately you import it in the file where you wanna use it so that they're in the JSX code,
    you can use it like an HTML element, just starting with this uppercase character.
 */