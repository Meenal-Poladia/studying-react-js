/*
Link: https://www.youtube.com/watch?v=Zz6eOVaaelI

    Basics

    Advantages of SCSS over CSS are:
    1. It helps to create reusable variables which when used in an element or a class
       they take up its property. --> example 1
    2. Elements or their classes can be nested in inside one another. Thus, we can organise all
       our nested elements in an hierarchy--> example 2
    3. It also avoids the problem of a particular class getting the properties of the class
       with the same name, as here the nesting plays an important role.
    4. Properties like hover and focus can also be added --> example 2
    5. After and before can also be added --> example 2
    6. If the index file is too large then seperate scss. files can also be created for
        each section and later be imported into the index.scss file. All the variables
        created inside the index.scss file will be available in other files as well. The files name
        created must have an underscore at the start (_header.scss)
        We dont need the extension while importing the file --> example 3
    7. Many a times the scss variables are so many that there might be a different file for
        them "_variables". Later this file needs to be imported in the index.scss
    8. Few reusable properties can also be clubbed and put in a reusable function like
        we do in javascript. --> example 4
    9. The created scss function can be called like this --> example 4
    10. Custom parameters can also be added so that a particular value can be changed.
        Like changing display:flex to display:grid --> example 5
    11. Scss also allows inheritance where in we inherit all the properties of one
        element into another and can also later override the properties which we want the
        element to take. --> example 6
    12. We can also perform mathematical functions like "+, -, /, *" on properties. -->
        example 7


example 1:
$primaryColor: rgb(42, 42, 42);

h3 {
    background: $primaryColor;
}

example 2:
    header {
        background: $primaryColor;
        button {
            font-size: 1.2 rem;
            $:hover {
                text-color: blue;
            }
            $::after {
                content: "I am here.";
            }
        }
        .mainClass {
            line-height: 1.2 em;
        }
    }
    In CSS it means header button or header .mainClass

example 3:
@import "./header";

example 4:
@mixin variableName {
    display: flex;
    align-items: center;
    justify-content: center;
}

h3 {
@include variableName();
}

example 5:
@mixin variableName($direction, $background) {
    display: $direction;
    align-items: center;
    justify-content: center;
    background: $background;
}

h3 {
@include variableName(flexbox, blue);
}

example 6:
h4 {
    extends header                                  // Getting all the properties in header
    background: pink;                               // Overriding the colour
}

example 7:
footer{
    width: 100% - 20%;
}
 */

