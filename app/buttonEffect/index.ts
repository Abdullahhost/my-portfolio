
export const handleMouseMove = (event: any, buttonRef: any, textRef: any) => {

    let position = buttonRef.current.getBoundingClientRect();

    let x: any, y: any, tx: any, ty: any;

    x = (event.clientX - position.left - position.width / 2) / 2.2;
    y = (event.clientY - position.top - position.height / 2) / 2.2;

    tx = (event.clientX - position.left - position.width / 2) / 4;
    ty = (event.clientY - position.top - position.height / 2) / 4;



    buttonRef.current.animate(
        {
            transform: [`translate(${x * 0.5}px, ${y * 0.5}px)`]
        }
        ,
        {
            // easing: "cubic-bezier(.7, 0, .2, 1)",
            duration: 300,
            fill: "forwards",
        }
    );

    textRef.current.animate(
        { transform: [`translate(${tx}px, ${ty}px)`] },

        {
            // easing: "cubic-bezier(.7, 0, .2, 1)",
            duration: 400,
            fill: "forwards",

        }
    );
}
export const handleMouseOut = (event: any, buttonRef: any, textRef: any) => {

    const position = buttonRef.current!?.getBoundingClientRect();
    let x: any, y: any;

    x = (event.clientX - position.left - position.width / 2) / 4;
    y = (event.clientY - position.top - position.height / 2) / 4;

    buttonRef.current.animate(
        {
            transform: [
                `translate(${0}px,${0}px)`,
            ]
        },

        {
            easing: "cubic-bezier(.7, -1.8, 0.4, 5.7)",
            duration: 490,
            fill: "both",
        }
    );

    textRef.current.animate(
        {
            transform: [
                `translate(${0}px,${0}px)`,
            ]
        },
        {
            easing: "cubic-bezier(.7, 0, .2, 1)",
            duration: 400,
            fill: "both",

        }
    );
}