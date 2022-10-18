/*

    Creating a wrapper component

    While we create any react component it is crucial to wrap it inside a single element as we can return only one
    element. So, we use div or other html elements to create this wrapper in order to render our code.
    However, this can lead to many unnecessary div wrappers which can be avoided if we create a Wrapper component which
    return just the props.children.

    We can later import this component which returns just the children and avoids unnecessary divs.

    Thus, it helps to fulfill the requirement that there should be one root element and also does not render anything
    on the DOM.

    example -
    const Wrapper = (props) => {
        return props.children
    }

    Importing Wrapper component
    <Wrapper> JSX code here </Wrapper>

 */