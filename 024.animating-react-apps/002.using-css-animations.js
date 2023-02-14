/*

    Using Css Animations

    In Css transition we just say that whenever a property changes animate that change and figure out how to
    animate it on your own. A css animation is a detailed set of steps we want to execute when animation is at a
    certain state at a point. Inside these state we describe how the object should look like at a certain point
    of time. -> example 1

    If we dont define any end state then it jumps back to the starting phase. If we add the forwards value then it
    keeps the final animation step. In order to avoid the bump from the modal we can use keyframes again of
    closeModal again for smooth closing of the modal.

    Animations gives more control over the Css than the transition property

    example 1
    .modalOpen{
        animation: openModal 0.4 ease-out ;              //Animation name, time after which anmation should appear,
    }                                                   // how it should appear, how it should end

    .modalClose{
        animation: closeModal
    }

    @keyframes openModel {
        0%{
            opacity: 0;
            transform: translateY(-100%);
        }

        50%{
            opacity: 1;
            transform: translateY(20%);
        }

        100%{
            transform: translateY(0);
        }
    }

    @keyframes closeModel {
        0%{
            opacity: 1;
            transform: translateY(0%);
        }

        50%{
            opacity: 0.8;
            transform: translateY(60%);
        }

        100%{
            transform: translateY(-100%);
        }
    }

 */