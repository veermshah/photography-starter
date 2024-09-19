import React, { useContext } from "react";
import Socials from "./Socials";
import Logo from "../img/header/logo2.png";
import MobileNav from "./MobileNav";
import { CursorContext } from "../context/CursorContext";
import { Link } from "react-router-dom";

const Header = () => {
    const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
    return (
        <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[100px] flex items-center">
            <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
                <Link to={"/"} className="max-w-[200px]">
                    <img src={Logo} alt="logo" className="w-72" />
                </Link>
                <nav
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaverHandler}
                    className="hidden xl:flex gap-12 font-semibold font-primary"
                >
                    <Link
                        to={"/"}
                        className="text-[#696c6d] hover:text-primary transition text-xl"
                    >
                        Home
                    </Link>
                    <Link
                        to={"/about"}
                        className="text-[#696c6d] hover:text-primary transition text-xl"
                    >
                        About
                    </Link>
                    <Link
                        to={"/portfolio"}
                        className="text-[#696c6d] hover:text-primary transition text-xl"
                    >
                        Portfolio
                    </Link>
                    <Link
                        to={"/contact"}
                        className="text-[#696c6d] hover:text-primary transition text-xl"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
            <Socials />
            <MobileNav />
        </header>
    );
};

export default Header;
