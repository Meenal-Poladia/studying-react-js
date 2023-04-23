/*

    Introducing react portals

    React portals are another useful feature, which do something similar, which also help us write cleaner code.

    Having a modal JSX nested under HTML normal structure is not ideal. Because a modal is basically an overlay
    on your page. So logically, it's above everything else. And if it's then nested in some other HTML code,
    it might technically work because of styling, but it's not good code. A screen reader will find it difficult to
    interpret this nested overlay so to avoid this problem we have portals.
    This semantic issue can also be with dialogue boxes, side-drawers and other kinds of overlay.

    Portals help to create these features as their siblings of App.js thus they work the same but semantically they
    are structured better.

 */