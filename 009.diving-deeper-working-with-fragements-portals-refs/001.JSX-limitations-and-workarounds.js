/*

    JSX limitations and workarounds

    There are certain limitations of JSX:

    We cannot return two elements side by side of each other, they need to be wrapped inside a root element.
    This is because in javascript as well we can return only one value and not multiple values.

    To solve this we can either wrap the components inside a root component like <div> or we could use a native
    javascript array. So, we can replace the div with [content goes here], as this is an array we need not use
    curly brackets as we are using javascript and not JSX.
    But the issue with this approach is that it gives a warning that it needs a key set on each element as it
    is an array. So, we need to add a key prop on each component. However, this can be cumbersome.

    So, it is easier to use a div than an array. But, using a div can lead to div soup as there are many divs which are
    not adding any semantic value to the code and are simply there just as we need a wrapper div.
    Rendering so many unnecessary divs can make our browser slower and also lead to issue in styling CSS if we are
    using selectors.

 */