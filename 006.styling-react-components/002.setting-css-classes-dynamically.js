/*

    Setting css classes dynamically

    Another alternative to adding inline styling is adding classes dynamically. The class will be added and the
    styling is applied only when the condition is satisfied.

    To add the dynamic value we use {} and template literal while creating the class. We use template literal as the
    values inside the class need to be of type string and at the same time dynamic in nature.

    Example -
    <div className= {`normalClass ${isValid ? thisClass : thatClass}`}></div>

 */