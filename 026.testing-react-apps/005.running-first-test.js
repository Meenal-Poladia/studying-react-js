/*

    Running first test

    When we install the node package for create react app we can also by default get the dependency for jest and
    react testing library in our project.

    App.test.js and setupTests.js file are needed when we want to use testing in react project. setupTests.js file
    does the setup for testing in our project and we do not need to do anything in the file.
    App.test.js is the file which is there to test our App component. It is a convention to name the testing files
    like our component file but just with the .test convention.

    The test function in the App.test.js file takes 2 arguments:
        1. The description of the test. This helps us to identify the test in the testing output.
        2. This is a callback function which contains the actual testing code. This code will be executed once we
        run the test.

    To test our test cases we need to run few scripts as we did with our developmental server. We use the command
    npm test. We see the following commands after entering the command npm test -> example 1

    To quit the testing mode we use the command Ctrl + C.
    If we want to restart testing again then we select the command npm test again

    example 1
    › Press f to run only failed tests.
    › Press a to run all the tests.
    › Press o to only run tests related to changed files.
    › Press q to quit watch mode.
    › Press p to filter by a filename regex pattern.
    › Press t to filter by a test name regex pattern.
    › Press Enter to trigger a test run.


 */