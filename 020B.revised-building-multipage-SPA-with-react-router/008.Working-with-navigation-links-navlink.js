/*

    Working with navigation links Navlink

    React router dom offers a feature in which we can highlight the link that is active at present.
    While we can apply any styling to the <a> tag itself as behind the scenes the react router also renders the <a> tag.
    Using Navlink has its own advantages.

    The NavLink element helps us to identify which is the current active link. The Navlink element takes a className
    property which takes a callback function. This callback takes an object in which we get a isActive property. If the
    link is active then it is true.

    Since every route starts with "/", this route "/" is always activated but to avoid so we can use the property
    end on the Navlink element. This property checks the entire route and it is only activated when the entire route
    matches in the url.

    example
     <NavLink
        to="/"
        className={({isActive}) => isActive ? "active": undefined}
        end
    >
        Home
    </NavLink>

 */