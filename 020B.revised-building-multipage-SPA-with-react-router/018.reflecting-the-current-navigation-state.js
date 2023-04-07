/*

    Reflecting the current navigation state

    The react router gives us a special hook which we can use to check the current route transition state. This state
    helps us to see if the route transition has been initiated or we are still awaiting for the data to arrive.

    The useNavigation hook returns an object. There are 3 state which are possible in this hook. The idle, loading or
    submitting.

    example - 1
    import React from 'react';
    import {Outlet, useNavigation} from "react-router-dom";
    import MainNavigation from "../components/MainNavigation";

    const RootLayout = () => {
        const navigation = useNavigation();

        return (
            <>
                <MainNavigation/>
                {navigation.state === "loading" && <p>Loading...</p>}
                <main>
                    <Outlet/>
                </main>
            </>
        );
    };

    export default RootLayout;

 */