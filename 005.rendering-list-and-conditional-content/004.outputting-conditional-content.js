/*

    Outputting Conditional Content

    Conditional content is about rendering different output under different conditions. Unlike in javascript we cannot
    use long statements like if...else or for loop between the curly braces in the return method.

    Thus, we can use ternary operator or && operator to conditionally render content inside the return method.

    {
        filteredList > 0
        ?
        <p>There are no list items</p>
        :
        <p>This is the list item</p>
    }
 */