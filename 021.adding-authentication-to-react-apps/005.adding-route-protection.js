/*

    Adding Route Protection

    It is important to note that until the user has signed in and is authenticated, the user should not be able to
    visit other routes than the login page itself.
    So, checks can be made when the user tries to access that route. If Auth token is not there then the user should
    not be able to see the page.

 */