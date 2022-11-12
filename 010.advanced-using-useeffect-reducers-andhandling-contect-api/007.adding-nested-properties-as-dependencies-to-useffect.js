/*

    Adding nested properties as dependencies to useffect

    We can use object destructuring to add object properties as dependencies to useEffect(). -> example 1

    We could also just specify the object key in the dependency itself rather than destructuring the object -> example 2

    But we should avoid adding the object as a whole in the dependency as the effect function would rerun whenever
    any property of the object changes

    example 1
    const { someProperty } = someObject;
    useEffect(() => {
      // code that only uses someProperty ...
    }, [someProperty]);

    example 2
    useEffect(() => {
      // code that only uses someProperty ...
    }, [someObject.someProperty]);

 */