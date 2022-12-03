import React, { useState, useLayoutEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);


    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);

        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });

    }, []);


    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="top-to-btm">
            {" "}
            {showTopBtn && (
                <FaAngleUp
                    className="icon-position"
                    onClick={goToTop}
                />
            )}{" "}
        </div>
    );
};
export default ScrollToTop;