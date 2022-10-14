/*

    Passing data via props

    We can make our components reusable by using parameters and a concept called props in React.
    We can pass data to the custom component by adding a attribute and inside of that component, we can then get
    access to all these attributes which might have been set on our custom component.

    Just as HTML elements can have attributes, React, can have its own custom components attributes.
    However, this concept is just called props instead of attributes.
    Props simply stands for properties.
    The data should not be stored inside of them but instead received from outside from the parent component.

    Props can be accessed in the child element either by the use of the word props or by destructuring it at the
    start of the function as it is an object. We get key-value pairs in this props object here.
    The keys will be the attribute names defined here and the values, of course, will be the values set here.

    Props allows you to make our components reusable, and it allows us to pass data from another component to this
    component. Usually, props are passed from parent to child components.

 */