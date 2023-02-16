/*

    Extracting Route Params

    To really utilize the dynamic path feature, we need access to the concrete value entered in the URL inside of the
    loaded component.

    To extract the value from the URL we need to go to the component which is being loaded after the URL changes.
    We can use the useParams hook which can be imported from "react-router-dom". The useParams hook returns an
    object which can be stored in an object. The object has key-value pairs where the keys are the dynamic
    segment leading to the page.

 */