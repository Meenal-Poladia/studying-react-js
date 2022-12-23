/*

    Redux Challenges And Introducing Redux Toolkit

    Some of the challenges in using redux can be:
        1. The action.type and the dispatch action should not be written incorrectly or else it could lead to
        errors in the code especially when there are multiple developers working on a big application.
        2. Sometimes there can be clashing identifiers names.
        3. The more states we have in the store the difficult it gets to manage the states. So, the reducer keeps
        getting bigger and bigger.
        4. It is easy to mess up mutating the state because we need to return a new snapshot of the entire state,
        everytime we add a reducer.

     Solutions to the above problems:
        1. After creating the reducer, we should first import the reducer and later use it in the component so
        that we are ensured that we are using the right identifier spelling.
        2. Rather than having one reducer file, we can split the reducer into multiple reducer files

     Redux Toolkit is another library developed by the developers of redux which helps to make redux easier to manage
     and convenient for use for large applications.
      
 */