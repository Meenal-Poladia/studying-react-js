/*

    Using Async Await

    To avoid the .then chaining async-await can be used. It is like a syntactic sugar which lets us know that
    it is a async task which would await till received the response. -> example 1

    It looks like synchronous code but is still async code.


example 1
async function asyncTask = () => {
    const response = await fetch(`url`)
    const data = await response.json()
}
 */