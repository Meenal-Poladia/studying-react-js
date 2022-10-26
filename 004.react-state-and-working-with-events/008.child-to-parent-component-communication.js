/*

    Child to Parent Component Communication

    For passing data from parent to child we use props but props cannot be used to pass data from child to parent.

    To pass data from parent component to child component:
        1. Pass a function as a prop to the child component.
        2. Call the function in the child component and pass the data as arguments.
        3. Access the data in the function in the parent.
        4. We use the useState hook to store and retrieve data from the parent component.

    For example -
    import {useState} from 'react';

    function Child({handleClick}) {
      return (
        <div>
          <button onClick={event => handleClick(100)}>Click</button>
        </div>
      );
    }

    export default function Parent() {
      const [count, setCount] = useState(0);

      const handleClick = num => {
        // use parameter passed from Child component
        setCount(current => current + num);
      };

      return (
        <div>
          <Child handleClick={handleClick} />

          <h2>Count: {count}</h2>
        </div>
      );
    }

 */