import React, { useState, useEffect, createContext } from "react";

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
    // cursor position state
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    // cursor bg state
    const [cursorBg, setCursorBg] = useState("default");

    const mobileViewportsIsActive = window.innerWidth < 768;

    useEffect(() => {
        if (!mobileViewportsIsActive) {
            const move = (e) => {
                setCursorPosition({ x: e.clientX, y: e.clientY });
            };
            window.addEventListener("mousemove", move);
            //remove event
            return () => {
                window.removeEventListener("mousemove", move);
            };
        } else {
            setCursorBg("none");
        }
    });

    // cursor variants
    const cursorVariants = {
        default: {
            x: cursorPosition.x - 16,
            y: cursorPosition.y - 16,
            backgroundColor: "#0e1112",
        },
        text: {
            width: "125px",
            height: "125px",
            x: cursorPosition.x - 62,
            y: cursorPosition.y - 62,
            backgroundColor: "#fff",
            mixBlendMode: "difference",
        },
        none: {
            width: 0,
            height: 0,
            backgroundColor: "transparent",
        },
    };

    const mouseEnterHandler = (e) => {
        setCursorBg("text");
    };
    const mouseLeaverHandler = (e) => {
        setCursorBg("default");
    };

    return (
        <CursorContext.Provider
            value={{
                cursorVariants,
                cursorBg,
                mouseEnterHandler,
                mouseLeaverHandler,
            }}
        >
            {children}
        </CursorContext.Provider>
    );
};

export default CursorProvider;
