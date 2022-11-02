/*

    Rendering lists of Data

    To view a list of items we should add a {} in the return method. This allows us to write javascript code inside
    react return.

    For accessing each item in the array, we use the map method. This method makes transformation to the existing array
    elements if any and stores the new values into the new array. In the callback of this method we render the UI.


    For example -
    {items.map(item => {
        <p>item.title</p>
        <p>item.name</p>
        <p>item.email</p>
    })}

 */