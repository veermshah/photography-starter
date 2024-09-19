import React, { useContext } from "react";
import { ImInstagram, ImPinterest, ImGithub, ImLinkedin } from "react-icons/im";
import { BsMedium } from "react-icons/bs";
import { CursorContext } from "../context/CursorContext";

const Socials = () => {
    const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
    return (
        <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaverHandler}
            className="hidden xl:flex ml-24"
        >
            <ul className="flex gap-4">
                <li>
                    <a href="http://www.instagram.com">
                        <ImInstagram />
                    </a>
                </li>
                <li>
                    <a href="http://www.pinterest.com">
                        <ImPinterest />
                    </a>
                </li>
                <li>
                    <a href="http://www.github.com">
                        <ImGithub />
                    </a>
                </li>
                <li>
                    <a href="http://www.linkedin.com">
                        <ImLinkedin />
                    </a>
                </li>
                <li>
                    <a href="http://www.medium.com">
                        <BsMedium />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Socials;
