/*

    Attaching Payloads To Actions

    The action that we dispatch sometimes need to carry extra data that we need to store in the store which
    is called as payload. Payload is stored in K-V pair in the dispatch function. -> example 1
    This property can be extracted in the reducer using action.payload.

    example 1
    dispatch({type: "increment" , payload: 5})

 */