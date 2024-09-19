import React, { useState } from "react";
import WomanImg from "../img/about/woman.png";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const About = () => {
    const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);
    const navigate = useNavigate();
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.section
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="section"
        >
            <div className="container mx-auto h-full relative">
                <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
                    <div className="flex-1 max-h-96 lg:max-h-min order-2 lg:order-none overflow-hidden">
                        <img src={WomanImg} alt="" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: "-80%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-80%" }}
                        transition={transition1}
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaverHandler}
                        className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
                    >
                        <h1 className="h1">About me</h1>
                        <p className="mb-6 max-w-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. <b>Doloribus quaerat quisquam</b> voluptatem
                            aliquam suesciunt explicabo aspernatur.
                            <br />
                            <br />
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit.
                        </p>

                        <motion.div
                            whileHover={{
                                rotateY: 180,
                                transition: { duration: 0.6 }, // Control the duration of the flip
                            }}
                            whileTap={{ scale: 1.1 }}
                            className="btn cursor-pointer"
                            onClick={() => navigate("/portfolio")}
                        >
                            View my work
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
