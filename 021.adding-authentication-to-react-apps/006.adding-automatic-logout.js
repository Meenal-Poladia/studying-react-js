/*

    Adding automatic logout

    Most of the time when the user has logged in the current session expires after sometimes. In such a case, a
    setTimeout can be attached on the root component after the user has logged in and once the timeout has been done
    then the user is redirected to logout automatically.
    This is not a good solution as after closing the page when the user again opens the page, setTimeout is again
    reset.

    Another way is to set the expiration date on the backend when the user is authenticated. -> example 1


    example 1
    localStorage.setItem(token: "token");
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem("expiration", expiration.ISOString())

 */