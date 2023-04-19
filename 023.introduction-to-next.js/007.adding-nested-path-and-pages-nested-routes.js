/*

    Adding Nested Path and Pages Nested Routes

    This index.js file loads the root page or slash nothing because it's the index.js file directly in the pages
    folder.

    For creating a news page, we create a news.js file in the pages folder or an alternative would be to
    create a news folder and later create an index.js file in the news folder or move the news.js file in the
    news folder.

    Folders, which you create in your pages folder also act as path segments.

    If we want to create a nested path then we need to create the file inside the news folder. We will have one
    index.js file which runs when the path to news is hit and when news/something is hit when another file
    inside the news folder is called. Multiple such files can be created.

    Alternatively we can create another nested sub-folder, something-important with the index.js file in there.
    That would again be the alternative to using such a named file name in the news folder.

 */