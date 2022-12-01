/*

    Configuring custom hooks

    Customs hooks are functions and as our functions can accept parameters similarly custom hooks can also accept
    parameters which help our hook to become dynamic.
    In the below example we are setting a flag on which we are deciding whether to execute a particular condition or
    another.
    The parameter is like a dependency as whenever the dependency changes we want the useEffect to be executed so we
    wrap it inside the dependencies array.

    example -
    //Setting the default parameter to true
    const useCounter = (forwards = true) => {
        const [counter, setCounter] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                if(forwards) {
                    setCounter((prevCounter) => { prevCounter + 1});
                }
                else {
                    setCounter((prevCounter) => { prevCounter - 1});
                }
                return () => clearInterval(interval);
            }, 1000)
        }, [forwards])
        return counter
    }

 */