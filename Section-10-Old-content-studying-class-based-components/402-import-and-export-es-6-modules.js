/*
Import and Exports using ES 6 Modules

The fact that having one massive file for the entire project is going to be hard for debugging
so one can create seperate components and later connect the components using "Imports and Exports"

There are two types of imports and exports:

1.  Named imports and Named exports

    - In a component there may be separate files where you are going to have all kinds of information like
    some functions, some data, some components.

    - Named exports are useful when we dont want to share all the data in a particular file or keep some info
    as a local secret.

    - So let's say if you are interested in just exporting just one variable and keeping others as the secret
    then we use a "Named export and Named import". In this case, you need to add the word "export"
    before the variable --> example 1

    - When importing the named exports variables the same name need to be used as the ones in export -->
    example 2

    - When trying to access an object from inside the named import file, it will throw error, however
    the object name with its key can be accessed --> example 3

    - If we want to import all the named exports from a component without specifying each exported variable name then
    we use this --> example 4

    - Another way to use named exports is. --> example 5


2. Default Exports
    - There is always going to be only one default export per file.

    - We have access to that content only which has been exported.

    - There are 2 ways to use export default. --> example 6

    - In default exports the name of the file can be what the person wants to name but
    as a convention it good to name the import as the exported name. --> example 7

    - In default export the relative path to the file is more important than the name
    of the file (It can be your favourite colour as well)


example 1 - named exports
export const age = 32;                                  exporting variable
export const name = "John Smilga";                      not exporting variable
export person = {
    name: "peter,
    age: 26
}

example 2 - named exports
import {name, age, person} from "relative path";

example 3 - error when accessing the entire object
console.log(person)                                     error
console.log(person.name, person.age)                    no error

example 4 - importing all named exports
import * as data from "relative path"

console.log(data.age)
console.log(data.name)

example 5 - Another way to do named exports
export {name, age, person}                              exporting at the end of the file

example 6 - Using default export
export default const function = (a, b) {
    return a + b
}

export default function;                                adding at the end of the file

example 7 - Making a default import
import Oranges from "../../data";
import function from "../../data";
 */


