/*

    Analysing a standard react project

    Index.js is actually the first code file, which will be executed whenever the page is loaded.

    We cant import CSS file in javascript file but in react we can.

    In React, HTML code is written in a javascript file which wouldn't work in vanilla javascript but here it works as
    the code is compiled and transformed into a language understood by the browser.

    We are importing ReactDOM into index.js to then call a method on it, the createRoot method.
    This creates basically the main entry point, the main hook of the overall user interface you are about to build
    with React. The idea behind createRoot, and what this does in the end is it tells React where this React application,
    this user interface, which you build with React in the end should be placed in the web page that is loaded.

    There is index.html file. This is basically the only HTML file that is being used by this overall React application
    because it's a so-called single page application. It's this single HTML file that is the entry point,
    the place where the React-driven user interface is. In this index.html file, we've got a regular HTML document
    structure.

    Note: ./ means please look in the same folder
 */