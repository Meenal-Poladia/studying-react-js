/*

    A closer look at JSX

    Behind the scenes react uses javascript to transform the code into javascript.

    Whenever we write JSX code we are using javascript createElement method which behind the scenes transforms the
    JSX code to react.
    React.createElement() is a method which is called. It takes 3 arguments:
        1. The element which should be created.
        2. An object which sets all the attributes on the element. If there is no object than we pass an empty object.
        3. The content between the opening and closing tags of the element. There can be a long list of argument to it
            as well.

    The below example can be cumbersome to write so we write the JSX code which is later converted to javascript
    behind the scene.
    In modern project we avoid the import of React from React as the project setup is able to make the transformation.
    If a project has an import of React from React then it is an older project.

    example - behind the hood
    return React.createElement(
    "div",
    {},
    React.createElement(
    "h2",
    {},
    "Lets gets started"),
    React.createElement(Expenses, {items: expenses})
    )

    example - JSX code
    return (
        <div>
            <h2>Lets gets started</h2>
            <ExpenseItem items={expenses}/>
        </div>
    )
 */