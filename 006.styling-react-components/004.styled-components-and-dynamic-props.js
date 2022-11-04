/*

    Using Css Module

    While using styled components we write the css in the same file as the react code but if we want to write cleaner
    code then we can separate html and css file into different files. The alternative to Styled components is css
    modules.
    Projects configured with create react app have css modules configured in it already.

    When importing the css into the js file we use named imports. We use the keyword classes or styles followed by
    the file path. the imported keyword styles or component is an object which holds the properties described in our
    css file. We can access the properties using classes.propertyName the way we access the object properties in
    javascript. When there is a dash in the classname we access the object properties is by using a [] like
    styles["property-Name"]

    When creating the css file we need to follow the convention fileName.module.css, the word module needs to be added.

    When we see the HTML code in our DOM we realise that the classes which are attached to the component consists of the
    component name underscore and a special dynamic class. These classes are unique and created during compilation to
    keep the classes scoped.

 */