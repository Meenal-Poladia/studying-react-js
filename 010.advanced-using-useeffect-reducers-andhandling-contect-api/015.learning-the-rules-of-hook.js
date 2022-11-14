/*

    Learning the rules of hook

    There are two main rules which we must follow while working with hooks.

    1. Only call react hooks inside react functions i.e React Component functions and Custom hooks.

    2. Only call react hooks at the top level. Dont call them in nested functions and in any block statements.
    example - we should not call useContext hook inside useffect.

    3. Unsaid rule: Always add everything we refer to inside of useffect function in the useffect dependency array. All
    the data that is from inside our component function in which you are using useffect needs to go into the dependency
    array.

 */