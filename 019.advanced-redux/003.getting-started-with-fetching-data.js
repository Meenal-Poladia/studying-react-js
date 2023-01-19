/*

    Getting started with fetching data

    An app action creator can also be used to fetch the data when the application loads. This function can also
    return a function which does something when the action is dispatched.

    example -
    const fetchDataCard = () => {
        return async (dispatch) => {
            const fetchData = async() => {
                const response = await fetch(`url')
                if(!response.ok) throw new Error(`Something went wrong`);
                const data = await response.json()
                return data
            }

            try {
                const cartData =await fetchData();
                dispatch(cartActions.replaceCart(cartData));
            }
            catch (error){
                //dispatch action to show error
            }
        }
    }

 */