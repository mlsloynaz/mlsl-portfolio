"use client"

import { ResultType } from "@/app/utils/definitions/contactMeTypes";
import { useState } from "react";

type ResultStatusProps = {
    type: ResultType
    message?: string;
}

function FormResultStatus({ type, message }: ResultStatusProps) {
    const [closed, setClosed] = useState(false);

    if (!message) {
        return
    }

    const resultStyle = () => {
        switch (type) {

            case "error":
                return {
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                        </svg>
                    ),
                    colorClass: "text-red-700 bg-red-50"
                }
            case "warning":
                return {
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        </svg>
                    ),
                    colorClass: "text-yellow-600 text-yellow-100",
                    hasCloseButton: true
                }
            case "success":
            default:
                return {
                    icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                    ),
                    colorClass: "text-indigo-800 bg-indigo-50",
                    hasCloseButton: true
                }
        }
    }

    function handleClose(event: React.MouseEvent) {
        event.preventDefault();
        setClosed(true);
    }


    const { icon, colorClass, hasCloseButton } = resultStyle();
    const visibilityClass = closed ? "hidden" : "flex-center"

    return (
        <div className={`my-4 p-2 ${visibilityClass} space-x-1 rounded-lg ${colorClass}`}
            aria-live="polite"
            aria-atomic="true"
        >
            <div className="flex">
                {icon}
                <p>{message}</p>
            </div>

            {hasCloseButton ? <button aria-label="Close" onClick={handleClose}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            </button> : null}
        </div>
    )
}


export default FormResultStatus