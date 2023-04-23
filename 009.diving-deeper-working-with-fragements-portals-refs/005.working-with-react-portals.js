/*

    Working with react portals

    To implement portals we need two things:
        1. A place where we want to portal our component to.
        2. Letting the component know that it has a portal to that place.

    To place the portal we go to the index.html page in the public folder and add a <div> with the id attribute
    either above or below the root element where we want to place the component. Multiple such components can be used
    as portals.

    After creating the portal we let the element know that it needs to be portal so we import ReactDOM and use the
    method createPortal which takes two argument, React child node to be appended and the place where we need to
    append the component. We can also attach click events on the React Node which is passed as a portal.

    For example -
    return (
        {ReactDOM.createPortal(<Modal onClick = {props.onConfirm}/>, document.getElementById("modal"))}
    )

    Even though the component code is deeply nested, the component will always appear next to the App.js in the
    HTML DOM.

 */