/*

    Understanding react error messages

    ./src/App.js Line 42: 7
    Parsing error: adjacent JSX element must be wrapped in an enclosing tag. Did you want a JSX fragment <></> ?
    This error mostly shows up when there are two sibling elements which are not wrapped inside a parent element
    or there is no root element.

    Sometimes IDE also prompts error for the user to understand. It is important to read the error message completely
    as many a times the answer lies in the message itself.

    Other common mistakes made by the user are:
        1. Incorrect function reference name. Thus the browser also shows that the function is undefined.

    Never panic when you see an error message, read error messages, have a look at the line or the file it's coming from,
    have a look at the code snippet it might be showing you and then look at the problematic code part,
    at the problematic code snippet.

    Another most frequent error is: Encountered two children with the same key. Keys should be unique so that
    components maintain their identity across updates....
    This warning is set when we are trying to render a list and the keys in the list are the same. This can also lead to
    logical error wherein we are trying to delete an item with a particular item but delete another as the id for
    others are the same.

 */