/*

    Using one state object

    Rather than writing separate states for each there is also a way in which all states can be maintained using an
    object.

    example -
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    })

    consuming it -
    setUserInput ({
        enteredTitle: "Name",
        enteredAmount: 343,
        enteredDate: new Date()
    })

    So, the logic remains the same but now all the states are in one object managed as one piece of state
    instead of three separate slices.
    The issue with this approach is that whenever we update this state we need to update all the three properties and
    not just one.

    If we just set the state for one value and do not set the state of others then the values of other keys are lost.
    Thus, we will have just one-key value in the new object.

    If we do not want to let the other data get lost then we manually need to copy the entire object and set it
    everytime we set a new value.
    Another way of saving the values is through spread operator.

    example -
    Solution 1:
    setUserInput ({
        enteredTitle: "Name",
        enteredAmount: 343,
        enteredDate: new Date()
    })

    Solution 2:
    setUserInput ({
        ...userInput,
        enteredDate: new Date(),
    })

 */