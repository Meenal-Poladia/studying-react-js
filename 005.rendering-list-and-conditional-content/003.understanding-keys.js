/*

    Understanding Keys

    React has a special concept when it comes to rendering lists of data a concept which exists to ensure that React is
    able to update and render such lists efficiently without performance losses, or bugs, which may occur.

    Key should be unique for each list item as it helps react to identify which item to delete, add or update.
    Map method also gets a second argument of index which can be used as keys however it is discouraged to use that
    as it keeps on changing anytime an item is added, deleted or updated in the list. It is a good practise to add
    a key which is attached to the item.

    If we do not add a key while rendering a list then it throws an error.

 */