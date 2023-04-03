/*

    Navigating between pages with links

    When we are using the anchor tag for the user to navigate to the new route we are sending an additional request
    due to which the page gets refreshed again. Refreshing the page might lead to losing the current state, network
    request and loading a new html page.

    The Link element works like an anchor tag which navigates the user to another link without making any API call or
    rendering an HTML page.

    example - 1
    import React from 'react';
    import {Link} from "react-router-dom";

    const Home = () => {
        return (
            <div>
                <h3>HomePage</h3>
                <p>Go to
                    <Link to="/products"> the list of Products</Link>
                </p>
            </div>
        );
    };

    export default Home;

 */