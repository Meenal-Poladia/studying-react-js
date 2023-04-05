/*

    Understanding absolute and relative path

    Path which start from / are all absolute paths as these paths are after the domain name.

    If there is no "/" in the path then react appends these child route to the parent routes.

    To go one level up the path we can use the command -> example 1
    Setting the property to relative path helps to go just one level up than going into the root directory.

    example 1
    <Link to=".." relative="route">{product.title}</Link>

 */