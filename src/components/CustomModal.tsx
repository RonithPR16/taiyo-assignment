import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";

const CustomModal = ({
    visible,
    setVisible,
    children,
    blockClosing = false,
}: {
    visible: boolean;
    setVisible: (value: boolean) => void;
    children: React.ReactNode;
    blockClosing?: boolean;
}) => {
    const [domReady, setDomReady] = useState(false);

    useEffect(() => {
        setDomReady(true);
    }, []);

    useEffect(() => {
        if (!visible) return;
        const keyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && !blockClosing) {
                setVisible(false);
            }
        };
        document.addEventListener("keydown", keyDown);
        return () => {
            document.removeEventListener("keydown", keyDown);
        };
    }, [visible, blockClosing]);

    useEffect(() => {
        if (visible) {
            document.body.style.position = "fixed";
            document.body.style.top = "0px";
            document.body.style.width = "100%";
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = "";
            document.body.style.top = "";
            window.scrollTo(0, parseInt(scrollY || "0") * -1);
        }

        return () => {
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";
        };
    }, [visible]);

    if (!visible) return null;

    return domReady
        ? ReactDom.createPortal(
            <>
                <div
                    className="fixed w-screen h-screen bg-black opacity-30 top-0  left-0 flex justify-center items-center z-[999]"
                    onClick={() => {
                        if (blockClosing) return;
                        setVisible(false);
                    }}
                />
                <div
                    className='fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 bg-white z-[1000] rounded-xl'
                    onClick={(e) => e.stopPropagation()}
                >
                    <div
                        className='flex items-center min-w-[90vw] lg:min-w-[500px] min-h-[100px] lg:max-w-[70vw] max-h-[70vh] bg-[var(--modal-background-color)] rounded-xl py-5 px-6'
                    >
                        {children}
                    </div>
                </div>
            </>,
            document.getElementById("portal")!
        )
        : null;
};

export default CustomModal;
