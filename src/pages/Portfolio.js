import React from "react";

import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";

import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const Portfolio = () => {
    const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
    const navigate = useNavigate();
    return (
        <motion.section
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="section"
        >
            <div className="container mx-auto min-h-screen relative">
                <div className="flex flex-col lg:flex-row items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
                    <motion.div
                        initial={{ opacity: 0, y: "-80%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-80%" }}
                        transition={transition1}
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaverHandler}
                        className="flex flex-col lg:items-start"
                    >
                        <h1 className="h1">Portfolio</h1>
                        <p className="mb-12 max-w-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quo praesentium distinctio totam incidunt,
                            dicta suscipit dolorum dolores repellat, nisi beatae
                            fugit omnis obcaecati accusamus, quibusdam deserunt
                            harum illum! Expedita, voluptatibus?
                        </p>
                        <motion.div
                            whileHover={{
                                rotateY: 180,
                                transition: { duration: 0.6 }, // Control the duration of the flip
                            }}
                            whileTap={{ scale: 1.1 }}
                            className="btn mb-[30px] cursor-pointer"
                            onClick={() => navigate("/contact")}
                        >
                            Hire me
                        </motion.div>
                    </motion.div>
                    <div className="w-full lg:w-auto h-[50vh] lg:h-[70vh] overflow-y-auto scrollbar-hide">
                        <div className="grid grid-cols-2 lg:gap-2">
                            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                                <img
                                    className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                                    src={Image1}
                                    alt=""
                                />
                            </div>
                            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                                <img
                                    className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                                    src={Image2}
                                    alt=""
                                />
                            </div>
                            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                                <img
                                    className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                                    src={Image3}
                                    alt=""
                                />
                            </div>
                            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                                <img
                                    className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                                    src={Image4}
                                    alt=""
                                />
                            </div>
                            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                                <img
                                    className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                                    src={Image4}
                                    alt=""
                                />
                            </div>
                            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                                <img
                                    className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                                    src={Image4}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Portfolio;
